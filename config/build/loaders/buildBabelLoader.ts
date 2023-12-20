import babelRemovePropsPlugin from '../../babel/babelRemovePropsPlugin';
import { BuildOptions } from '../types/config';

interface BuildBabelLoaderProps extends BuildOptions {
  isTsx?: boolean;
}

export function buildBadelLoader({ isTsx, isDev }: BuildBabelLoaderProps) {
  return {
    test: isTsx ? /\.(tsx|jsx)$/ : /\.(ts|js)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
        plugins: [
          ['@babel/plugin-transform-typescript', { isTsx }],
          '@babel/plugin-transform-runtime',
          isTsx && !isDev && [babelRemovePropsPlugin, { props: ['data-testid'] }],
        ].filter(Boolean),
      },

    },
  };
}
