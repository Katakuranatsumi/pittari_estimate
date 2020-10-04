'use strict'

const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_KEY: '"AIzaSyDlw76UiccEtIfesdW0ZXSWHQSPb8h9u5I"',
  PROJECT_ID: '"pittari-estimate"',
  AUTH_DOMAIN: '"pittari-estimate.firebaseapp.com"',
  DATABASE_URL: '"https://pittari-estimate.firebaseio.com"',
  STORAGE_BUCKET: '"pittari-estimate.appspot.com"',
  MESSAGING_SENDER_ID: '"689572499147"',
  APP_ID: '"1:689572499147:web:618be386a7a838ea09154e"',
  API_ENDPOINT: '"http://localhost3000"'
})
