import react from '@vitejs/plugin-react'
import wyw from '@wyw-in-js/vite'
import vike from 'vike/plugin'
import { UserConfig } from 'vite'

const config: UserConfig = {
  plugins: [
    {
      name: 'md-string',
      transform(code, id) {
        if (id.endsWith('.md')) {
          return `export default ${JSON.stringify(code)}`
        }
      }
    },
    wyw(),
    react(), 
    vike({ prerender: true })
  ]
}

export default config
