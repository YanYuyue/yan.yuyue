import react from '@vitejs/plugin-react'
import vike from 'vike/plugin'
import { UserConfig } from 'vite'
import { BibtexParser, Entry } from "bibtex-js-parser"
import wyw from '@wyw-in-js/vite'

const config: UserConfig = {
  plugins: [
    wyw(),
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
            const errors: string[] = [];
            BibtexParser.setErrorHandler((e) => errors.push(e));
            try {
              res = BibtexParser.parseToJSON(c)?.[0];
            } catch (e) {
              errors.push(String(e));
            }
            return res ?? { type: 'error', id: '', raw: c, errors };
          });
          return `export default ${JSON.stringify(parsed)}`
        }
      }
    },
    react(),
    vike({
      prerender: true,
    }),
  ],
  // ssr: {
  //   noExternal: ['styled-components']
  // }
}

export default config
