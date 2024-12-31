import react from '@vitejs/plugin-react'
import vike from 'vike/plugin'
import { UserConfig } from 'vite'
import wyw from '@wyw-in-js/vite'
import transformAssets from './vite-plugin/transform-assets'

const config: UserConfig = {
  plugins: [
    wyw({
      include: ['**/*.{ts,tsx}'],
      babelOptions: {
        presets: ['@babel/preset-typescript', '@babel/preset-react'],
      },
    }),
    transformAssets(),
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
