// postcss.config.js

const { license, author } = require('./package.json')
const year = new Date().getFullYear()

const resolve = plugins =>
  plugins.map(plugin => {
    return Array.isArray(plugin)
      ? require(plugin[0])(plugin[1])
      : require(plugin)
  })

module.exports = () => {
  return {
    plugins: resolve([
      'postcss-flexbugs-fixes',
      [
        'postcss-preset-env',
        {
          autoprefixer: {
            flexbox: 'no-2009'
          },
          stage: 3
        }
      ],
      [
        'postcss-banner',
        {
          banner: `@license ${license} (c) ${year} ${author}`,
          inline: true,
          important: true
        }
      ],
      'cssnano'
    ])
  }
}
