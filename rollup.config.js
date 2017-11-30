import vue from 'rollup-plugin-vue'
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve'
import replace from 'rollup-plugin-replace'
import json from 'rollup-plugin-json';
import uglify from 'rollup-plugin-uglify'
import { minify } from 'uglify-es';

const production = !process.env.ROLLUP_WATCH

export default {
  input: 'src/main.js',
  output: {
    file: 'static/bundle.js',
    // immediately-invoked function expression, since we're loading via a <script> tag
    format: 'iife',
    sourcemap: true
  },
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify('development'),
      'process.env.VUE_ENV': JSON.stringify('browser')
    }),
    resolve({
      browser: true
    }),
    commonjs({
      include: 'node_modules/**'
    }),
    json(),
    vue({
      compileTemplate: true,
      css: true
    }),
    production && uglify({}, minify) // minify in production
  ],
  watch: {
    chokidar: true,
    exclude: ['node_modules/**']
  }
}
