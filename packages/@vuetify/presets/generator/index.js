// Imports
const fs = require('fs')

module.exports = (api, options) => {
  if (!api.hasPlugin('vuetify')) {
    console.log('`@vuetify/presets` requires the `vue-cli-plugin-vuetify` package.')

    return
  }

  const configuration = options.configuration

  try {
    api.render(`./templates/${configuration}`)
  } catch (e) {
    console.log(e, options)
  }

  api.extendPackage({
    devDependencies: {
      'eslint-config-vuetify': '^0.6.1',
      'eslint-plugin-vue': '^6.2.2',
      'eslint-plugin-vuetify': '^1.0.0-beta.6',
      'vuex-pathify': '^1.4.1',
      lodash: '^4.17.15',
      webfontloader: '^1.6.28',
    },
  })

  api.injectImports(api.entryFile, 'import \'./plugins\'')

  api.onCreateComplete(() => {
    const presetName = `Vuetify ${configuration} preset`
    const projectName = api.rootOptions.projectName

    const home = api.resolve('src/views/Home.vue')

    if (fs.existsSync(home)) fs.unlinkSync(home)

    api.exitLog(`🍣  Successfully generated ${projectName} from the ${presetName}.\n`)
  })
}