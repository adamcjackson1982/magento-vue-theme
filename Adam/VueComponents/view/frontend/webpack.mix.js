const mix = require('laravel-mix');
const LiveReloadPlugin = require('webpack-livereload-plugin');
require('mix-tailwindcss');
	
// Compile Vue Components
mix.js('web/vue-app/src/main.js', 'web/js').vue( {version:3} )
mix.sass('web/scss/app.scss', 'web/css')
    .tailwind('./tailwind.js');
   

mix.sourceMaps(false, 'source-map')

mix.copy('app/code/Adam/VueComponents/view/frontend/web/js/*','pub/static/frontend/Magento/luma/en_GB/Adam_VueComponents/js/')
mix.copy('app/code/Adam/VueComponents/view/frontend/web/css/*','pub/static/frontend/Magento/luma/en_GB/Adam_VueComponents/css/')

// mix.minify('./web/js/main.js')

// LiveReload
mix.webpackConfig({
    plugins: [new LiveReloadPlugin()]
})

// Disable OS notifications for successful builds
mix.disableSuccessNotifications();