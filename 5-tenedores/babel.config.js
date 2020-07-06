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
            cfs: './src/cfs',
            components: './src/components',
            config: './src/config',
            fdc: './src/fdc',
            hooks: './src/hooks',
            layouts: './src/layouts',
            navigation: './src/navigation',
            screens: './src/screens',
            utils: './src/utils',
            wrappers: './src/wrappers'
          }
        }
      ]
    ]
  }
}
