// Inspired by:
// - https://github.com/babel/babel/blob/main/Gulpfile.mjs
// - https://github.com/babel/babel/issues/14567
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import nodePolyfills from 'rollup-plugin-polyfill-node';

export default {
  input: 'src/index.js',
  output: {
    dir: 'build/',
    format: 'umd',
    name: 'BabelStandaloneJSXOnly',
    sourcemap: true,
  },
  plugins: [
    commonjs(),
    nodeResolve({
      browser: true,
      exportConditions: ['browser'],
      preferBuiltins: false,
    }),
    json(),
    nodePolyfills(),
  ],
};
