const proxy = require('http-proxy-middleware');
module.exports = function expressMiddleware(router) {
  router.use(
    '/v/',
    proxy({target: 'https://api.shipit.cl', changeOrigin: true}),
  );
};
