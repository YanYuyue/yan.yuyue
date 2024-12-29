import react from '@vitejs/plugin-react'
import vike from 'vike/plugin'
import { UserConfig } from 'vite'
import { BibtexParser, Entry } from "bibtex-js-parser"

const config: UserConfig = {
  plugins: [
    {
      name: 'transform-assets',
      transform(code, id) {
        if (id.endsWith('.md')) {
          return `export default ${JSON.stringify(code)}`
        }
        if (id.endsWith('.bib')) {
          const startIndices = [0, ...[...code.matchAll(/^@\w/gm)].map((match) => match.index), code.length];
          const pieces: string[] = [];
          for (let i = 0; i < startIndices.length - 1; ++i) {
            if (startIndices[i] === startIndices[i + 1]) {
              continue;
            }
            pieces.push(code.substring(startIndices[i], startIndices[i + 1]));
          }
          const parsed = pieces.map(c => {
            let res: Entry | undefined = undefined;
            try {
              res = BibtexParser.parseToJSON(c)?.[0];
            } catch (e) {
              console.error(String(e));
            }
            return res ?? { type: 'error', id: '', raw: c };
          });
          return `export default ${JSON.stringify(parsed)}`
        }
      }
    },
    vike({
      prerender: true,
    }),
    react({ 
      // babel: { 
      //   plugins: [["babel-plugin-styled-components"]]
      // } 
    }),
  ],
  // ssr: {
  //   noExternal: ['styled-components']
  // }
}

export default config
