import defaultTheme from 'tailwindcss/defaultTheme'

const isProd = process.env.NODE_ENV === 'production'
const browserslist = ['> 0.5%', 'not dead', 'not ie 11', 'not op_mini all']
const fontFamilies = ['Roboto', ...defaultTheme.fontFamily.sans]

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'lighthouse-nuxt-demo',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Lighthouse testing',
      },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      /* Google font - START */
      // { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      // { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
      // {
      //   rel: 'dns-prefetch',
      //   href: 'https://fonts.gstatic.com',
      //   crossorigin: '',
      // },
      // {
      //   rel: 'stylesheet',
      //   href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&display=swap',
      // },
      /* Google font - END */
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  // css: ['@/assets/tailwind.min.css'],
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // '@nuxt/image',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config) {
      // disabled in production mode
      config.devtool = false
    },

    babel: {
      presets({ envName }, [preset, options]) {
        // https://github.com/nuxt/nuxt.js/blob/v2.15.8/packages/babel-preset-app/src/index.js#L94
        // replace the default targets with new one
        const targets = {
          client: { browsers: browserslist },
          server: { node: 'current' },
        }

        return [
          [
            preset,
            {
              // https://babeljs.io/docs/en/babel-preset-env#debug
              // remove the comment on next line for showing the polyfills and transform plugins enabled by preset-env
              // debug: true,
              ...options,
              targets: targets[envName],
            },
          ],
        ]
      },
    },

    extractCSS: isProd,

    publicPath: '/assets/',

    // css source-map should be disabled in all modes to improve compile time
    cssSourceMap: false,

    loaders: {
      vue: {
        // https://vue-loader.vuejs.org/options.html#prettify
        prettify: false,
      },
    },

    terser: {
      parallel: true,
      extractComments: false,
    },
  },

  tailwindcss: {
    config: {
      theme: {
        extend: {
          fontFamily: {
            sans: fontFamilies,
          },
        },
      },
    },
  },
}
