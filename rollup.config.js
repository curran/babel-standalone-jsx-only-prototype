// Inspired by https://github.com/babel/babel/blob/main/Gulpfile.mjs
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
  plugins: [commonjs(), nodeResolve(), json(), nodePolyfills()],
};
