import react from '@vitejs/plugin-react'
import vike from 'vike/plugin'
import { UserConfig } from 'vite'
import wyw from '@wyw-in-js/vite'
import transformAssets from './vite-plugin/transform-assets'
import mdImgSplit from './vite-plugin/md-img-split'

const config: UserConfig = {
  plugins: [
    wyw({
      include: ['**/*.{ts,tsx}'],
      babelOptions: {
        presets: ['@babel/preset-typescript', '@babel/preset-react'],
      },
    }),
    transformAssets(),
    mdImgSplit(),
    react(),
    vike({
      prerender: true,
    }),
  ],
}

export default config
