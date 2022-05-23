// Inspired by https://github.com/babel/babel/blob/main/packages/babel-standalone/src/index.ts
// Many thanks to @nicolo-ribaudo for guidance!
import { transformSync as babelTransform } from '@babel/core';
import pluginTransformReactJSX from '@babel/plugin-transform-react-jsx';

export const transform = (jsx, options = { sourceMaps: true }) =>
  babelTransform(jsx, {
    plugins: [pluginTransformReactJSX],
    ...options,
  });
