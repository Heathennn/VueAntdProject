const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          javascriptEnabled: true
        }
      }
    }
  },
  chainWebpack: (config) => {
    // config.module.rule('less').oneOfs.store.forEach((item) => {
    // 	item.use('sass-resources-loader')
    // 		.loader('sass-resources-loader')
    // 		.options({
    // 			resources: [
    // 				'./src/assets/less/util/base.less',
    // 				'./src/assets/less/util/function.less',
    // 				'./src/assets/less/util/sprite.less',
    // 				'./src/assets/less/util/variables.less'
    // 			]
    // 		})
    // 		.end()
    // })
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'))
      .set('views', resolve('src/views'))
      .set('store', resolve('src/store'))
      .set('router', resolve('src/router'))
      .set('config', resolve('src/config'))
      .set('directives', resolve('src/directives'))
      .set('utils', resolve('src/utils'))
      .set('api', resolve('src/api'))
      .set('mixin', resolve('src/mixin'))
    // config.resolve.extensions
    // 	.prepend('.css')
    // 	.prepend('.js')
    // 	.prepend('.vue')
    // config.externals(externals)
    // if (!IsProd) {
    // 	config.plugin('provide').use(webpack.ProvidePlugin, [
    // 		{
    // 			Vue: 'vue/dist/vue.js'
    // 		}
    // 	])
    // }
    // config.plugin('define').use(webpack.DefinePlugin, [{
    //     'process.env.PC_ENV': JSON.stringify(process.env.PC_ENV),
    // }])
    // config.plugin('BundleAnalyzerPlugin').use(BundleAnalyzerPlugin)
  },
  devServer: {
    // open: true,
    // host: '192.168.10.148',
    host: '192.168.73.206',
    port: 8877,
    // http-proxy-middleware官方文档 https://github.com/chimurai/http-proxy-middleware
    // 代理配置
    // proxy: {
    // 	'/': {
    // 		target: '',
    // 		ws: false,
    // 		secure: false,
    // 		// pathRewrite: { '^/api': '' },
    // 		// router: function(req) {
    // 		// 	console.log(req.url)
    // 		// },
    // 		onProxyReq: function(proxyReq, req, res) {
    // 			// add custom header to request
    // 			// proxyReq.setHeader('x-added', 'foobar')
    // 			// or log the req
    // 			// console.log(Object.keys(res))
    // 			// // 储存所有请求日志
    // 			// logger.info({
    // 			// 	message: `${req.method} -- ${
    // 			// 		req.url
    // 			// 	} -- ${JSON.stringify(req.query)} -- ${JSON.stringify(
    // 			// 		req.params
    // 			// 	)} --- token: ${req.headers.usertoken}`
    // 			// })
    // 		},
    // 		onProxyRes: async function(proxyRes, req, res) {
    // 			// let resBody = await getBody(proxyRes)
    // 			// // 接口不成功
    // 			// if (resBody.retCode !== '0000') {
    // 			// 	logger.error({
    // 			// 		message: `${req.method} -- ${
    // 			// 			req.url
    // 			// 		} -- ${JSON.stringify(
    // 			// 			req.query
    // 			// 		)} -- ${JSON.stringify(req.params)}`,
    // 			// 		label: `code => ${resBody.retCode} msg => ${resBody.retMsg}`
    // 			// 	})
    // 			// }
    // 		}
    // 	}
    // }
  }
}
