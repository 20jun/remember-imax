const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = app => {
	app.use(
		// 도메인 api로 호출
		createProxyMiddleware('/api', {
			target: 'http://localhost:8000/', // 통신할 서버의 도메인주소
			changeOrigin: true,
		}),
	);
};
