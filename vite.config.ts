import react from '@vitejs/plugin-react'
import wyw from '@wyw-in-js/vite'
import vike from 'vike/plugin'
import { UserConfig } from 'vite'

const config: UserConfig = {
  plugins: [
    wyw(),
    react(), 
    vike({ prerender: true })
  ]
}

export default config
