const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        // 匹配以 /api 开头的请求路径
        '/api',
        createProxyMiddleware({
            // 目标服务器地址
            target: 'http://ashuai.work:10000',
            changeOrigin: true,
            // 将 /api 替换为空字符串
            pathRewrite: { '^/api': '' },
        })
    );
};
