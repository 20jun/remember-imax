import React, { useEffect } from 'react';

import { imgBucket } from '../components/seatAPI';

function Test() {
	useEffect(() => {
		imgBucket();
	}, []);

	return <div>Test</div>;
}

export default Test;
