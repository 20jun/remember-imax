const express = require('express');
const router = express();

// http://localhost:8000/ 으로 접속 시 응답메시지 출력
router.get('/test', (req, res) => {
	res.send('Server Response Success /test');
});

module.exports = router;
