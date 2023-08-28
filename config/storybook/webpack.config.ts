import webpack, { RuleSetRule } from 'webpack';
import path from 'path';
import { BuildPaths } from '../build/types/config';
import { buildCssLoader } from '../build/loaders/buildCssLoader';

export default ({ config }: {config: webpack.Configuration}) => {
  const paths: BuildPaths = {
    html: '',
    entry: '',
    build: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  };
  config.resolve?.modules?.push(paths.src);
  config.module?.rules?.push(buildCssLoader(true));
  // // eslint-disable-next-line no-param-reassign
  // config.module.rules = config.module?.rules?.map((rules: RuleSetRule) => {
  //   if (/svg/.test(rules.test as string)) {
  //     return { ...rules, exclude: /\.svg$/i };
  //   }
  //   return rules;
  // });

  if (config.module?.rules) {
    // eslint-disable-next-line no-param-reassign
    config.module.rules = config.module?.rules?.map((rule: webpack.RuleSetRule | '...') => {
      if (rule !== '...' && /svg/.test(rule.test as string)) {
        return { ...rule, exclude: /\.svg$/i };
      }

      return rule;
    });
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
  }

  return config;
};
