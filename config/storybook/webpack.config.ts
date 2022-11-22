import path from 'path'

import webpack, { DefinePlugin, RuleSetRule } from 'webpack'

import { buildCssLoader } from '../build/loaders/buildCssLoader'
import { buildFileLoader } from '../build/loaders/buildFileLoader'
import { buildSvgLoader } from '../build/loaders/buildSvgLoader'
import { BuildPaths, Project } from '../build/types/config'

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    build: '',
    html: '',
    entry: '',
    locales: '',
    buildLocales: '',
    src: path.resolve(__dirname, '..', '..', 'src')
  }
  config.resolve!.modules = [paths.src, 'node_modules']
  config.resolve!.extensions?.push('.ts', '.tsx')

  const rules = config.module!.rules as RuleSetRule[]
  config.module!.rules = rules.map((rule: RuleSetRule) => {
    // eslint-disable-next-line @typescript-eslint/prefer-includes
    if (/svg/.test(rule.test as string)) {
      return { ...rule, exclude: /\.(png|svg|jpe?g|gif)$/i }
    }

    return rule
  })

  config.module!.rules.push(buildSvgLoader())

  config.module!.rules.push(buildFileLoader())

  config.module!.rules.push(buildCssLoader(true))

  config.plugins?.push(new DefinePlugin({
    __IS_DEV__: true,
    __PROJECT__: JSON.stringify(Project.Storybook)
  }))

  return config
}
