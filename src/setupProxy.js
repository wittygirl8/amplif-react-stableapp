//https://mko6b9drb2.execute-api.us-east-1.amazonaws.com/test/stabled

const { createProxyMiddleware } = require('http-proxy-middleware');
const proxy = {
  target: 'https://xqrmtyojt6.execute-api.eu-north-1.amazonaws.com/staged/sta',
  changeOrigin: false,
};
module.exports = function (app) {
  app.use('/test', createProxyMiddleware(proxy));
};
