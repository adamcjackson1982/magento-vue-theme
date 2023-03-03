const mix = require('laravel-mix');
const LiveReloadPlugin = require('webpack-livereload-plugin');
require('mix-tailwindcss');
//Static Theme Locations
var themeStatic = 'pub/static/frontend/';
let themes = [
	{folder:'Vue/vue-theme', lang:'en_GB'}];
	
// Compile Svelte Components
mix.js('web/vue-app/src/main.js', 'web/js').vue()
// mix.sass('web/vue-app/scss/app.scss', 'web/css')
//    .tailwind('./tailwind.config.js');
   

mix.sourceMaps(false, 'source-map')

themes.forEach(element => {
	mix.copy('app/design/frontend/'+element.folder+'/web/images/*', themeStatic + element.folder + '/' + element.lang + '/images/');
	mix.copy('app/design/frontend/'+element.folder+'/web/css/*', themeStatic + element.folder + '/' + element.lang + '/css/')
	mix.copy('app/design/frontend/'+element.folder+'/web/js/*', themeStatic + element.folder + '/' + element.lang + '/js/')
})
// LiveReload
mix.webpackConfig({
    plugins: [new LiveReloadPlugin()]
})

// Disable OS notifications for successful builds
mix.disableSuccessNotifications();