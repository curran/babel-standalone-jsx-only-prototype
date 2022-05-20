import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
  input: 'src/index.js',
  output: {
    dir: 'build/',
    format: 'umd',
    name: 'BabelStandaloneJSXOnly',
    sourcemap: true,
  },
  plugins: [nodeResolve()],
};
