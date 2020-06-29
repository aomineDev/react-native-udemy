module.exports = function (api) {
  api.cache(true)

  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            assets: './src/assets',
            components: './src/components',
            config: './src/config',
            hooks: './src/hooks',
            layouts: './src/layouts',
            routes: './src/routes',
            screens: './src/screens',
            utils: './src/utils'
          }
        }
      ]
    ]
  }
}
