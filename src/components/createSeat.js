const createSeat = () => {
	// 알파벳으로 열을 표현하고 각 열마다 numberOnlyArr 배열을 넣어 전체 좌석의 정보를 저장하는 배열
	// [{charCode: 'A', numberOnlyArr [0,0,1,2,3 ...]}, {...}]
	const seatInfoArr = [];

	// 좌석을 만들기 위한 for문
	// cols(행) A ~ P
	for (let cols = 1; cols <= 16; cols++) {
		// 알파벳 변환
		const charCode = String.fromCharCode(cols + 64);

		// A열부터 P열까지 각 1열마다 좌석의 존재유무를 저장하는 배열
		// 없는 좌석인 경우 0, 있는 좌석인 경우에는 숫자 저장
		// 다음 열을 생성하기 위해 배열 초기화
		let numberOnlyArr = [];

		// rows(열) 1 ~ 45
		for (let rows = 1; rows <= 45; rows++) {
			// 1 ~ 45 numberOnlyArr에 저장
			// [1,2,3,4,5 ...]
			numberOnlyArr.push(rows);
		}

		// 없는 좌석 처리
		// CGV 좌석을 기준으로 구현하였으며 언제든지 변경될 수 있음
		if (charCode === 'A') {
			numberOnlyArr.splice(0, 2, 0, 0, 0);
			numberOnlyArr.splice(16, 1, 0, 0);
			numberOnlyArr.splice(21, 2, 0, 0);
			numberOnlyArr.splice(26, 1, 0);
			numberOnlyArr.splice(32, 0, 0);
			numberOnlyArr.splice(46, 2, 0, 0, 0);
		}

		if (charCode === 'B' || charCode === 'C' || charCode === 'D') {
			numberOnlyArr.splice(0, 2, 0, 0, 0);
			numberOnlyArr.splice(16, 0, 0);
			numberOnlyArr.splice(32, 0, 0);
			numberOnlyArr.splice(46, 2, 0, 0, 0);
		}

		if (charCode === 'E') {
			numberOnlyArr.splice(0, 2, 0, 0, 0);
			numberOnlyArr.splice(16, 0, 0);
			numberOnlyArr.splice(31, 1, 0, 0);
			numberOnlyArr.splice(46, 2, 0, 0, 0);
		}

		if (charCode === 'F' || charCode === 'G' || charCode === 'H') {
			numberOnlyArr.splice(0, 2, 0, 0, 0);
			numberOnlyArr.splice(15, 1, 0, 0);
			numberOnlyArr.splice(31, 1, 0, 0);
			numberOnlyArr.splice(45, 3, 0, 0, 0, 0);
		}

		if (
			charCode === 'I' ||
			charCode === 'J' ||
			charCode === 'K' ||
			charCode === 'L' ||
			charCode === 'M' ||
			charCode === 'N' ||
			charCode === 'O'
		) {
			numberOnlyArr.splice(2, 0, 0);
			numberOnlyArr.splice(15, 1, 0, 0);
			numberOnlyArr.splice(31, 1, 0, 0);
			numberOnlyArr.splice(45, 1, 0, 0);
		}

		if (charCode === 'P') {
			numberOnlyArr.splice(2, 0, 0);
			numberOnlyArr.splice(
				9,
				28,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
			);
			numberOnlyArr.splice(45, 1, 0, 0);
		}

		// seatInfoArr에 해당 열의 알파벳, 좌석 유무 저장
		seatInfoArr.push({ charCode, numberOnlyArr });
	}
	return seatInfoArr;
};

export default createSeat;
