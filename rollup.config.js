import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import { terser } from 'rollup-plugin-terser'
import json from '@rollup/plugin-json'
import svg from 'rollup-plugin-svg'

const production = !process.env.ROLLUP_WATCH

const name = 'AtomMaterialIcons'

export default {
  input: 'src/index.js',
  output: [
    {
      name,
      format: 'umd',
      file: 'lib/atom-material-icons.js',
      exports: 'named'
    }
  ],

  plugins: [
    json(),
    svg(),
    resolve({ browser: true }),
    commonjs(),

    // If we're building for production (npm run build
    // instead of npm run dev), minify
    production && terser()
  ],
  watch: {
    clearScreen: false
  }
}
