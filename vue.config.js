module.exports = {
  baseUrl: process.env.NODE_ENV === 'production' ?
    '/production-sub-path/' : '/',
  devServer: {
    host: '192.168.10.241',
    port: '8080'
  }
}