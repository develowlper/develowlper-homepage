module.exports = {
  mode: 'spa',
  /*
  ** Set source directory
  */
  srcDir: 'src/',
  router: {
    middleware: 'check-auth'
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'Welcome to Nuxt!',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    babel: {
      presets: ["@vue/app"]
    },
    vendor: [
      'vuetify',
      'material-design-icons-iconfont/dist/material-design-icons.css'
    ]
  },
  plugins: [
    '~/plugins/vuetify',
    '~/plugins/material-design-icons'
  ],
  env: {
    AUTH0_CLIENT_ID: '',
    AUTH0_CLIENT_DOMAIN: ''
  }
}
