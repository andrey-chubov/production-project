import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildCssLoader } from './loaders/buildCssLoader';
import { buildBadelLoader } from './loaders/buildBabelLoader';

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  };

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff|woff2)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  };

  const codeBabelLoader = buildBadelLoader({ ...options, isTsx: false });
  const tsxBabelLoader = buildBadelLoader({ ...options, isTsx: true });

  const cssLoader = buildCssLoader(options.isDev);

  return [
    fileLoader,
    svgLoader,
    // typescriptLoader,
    codeBabelLoader,
    tsxBabelLoader,
    cssLoader,
  ];
}
