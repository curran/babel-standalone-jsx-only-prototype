// Inspired by https://github.com/babel/babel/blob/main/packages/babel-standalone/src/index.ts
import { transform as babelTransform } from '@babel/core';
import pluginTransformReactJSX from '@babel/plugin-transform-react-jsx';
export const transform = (jsx) => babelTransform(jsx, pluginTransformReactJSX);
