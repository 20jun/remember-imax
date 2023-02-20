import React from 'react';
import styled from 'styled-components';

function Test() {
	let numberOnlyArr = [];
	const seatInfoArr = [];

	for (let cols = 1; cols <= 16; cols++) {
		// 알파벳 변환
		const charCode = String.fromCharCode(cols + 64);
		numberOnlyArr = [];

		for (let rows = 1; rows <= 45; rows++) {
			numberOnlyArr.push(rows);
		}

		if (charCode === 'A') {
			console.log('A입니다');
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

			console.log(numberOnlyArr);
		}

		seatInfoArr.push({ charCode, numberOnlyArr });
	}

	console.log(seatInfoArr);
	return (
		<div style={{ width: '100%' }}>
			{seatInfoArr.map((arg, index) => {
				console.log(arg);
				return (
					<div style={{ display: 'flex' }} key={index}>
						<ColCodes>{arg.charCode}</ColCodes>

						{arg.numberOnlyArr.map((iii, index) => {
							console.log(String(iii).padStart(2, '0'));
							const char = `${arg.charCode}${String(iii).padStart(2, '0')}`;

							console.log(char);
							return (
								<div key={index}>
									<Seat key={index} onClick={e => console.log('click', char)}>
										{iii}
									</Seat>
								</div>
							);
						})}
					</div>
				);
			})}
			<div>여기에 모달창 컴포넌트</div>
		</div>
	);
}

const ColCodes = styled.div`
	left: 0px;
	margin-bottom: 1px;
	width: 15px;
	height: 14px;
	line-height: 14px;
	border-top: 1px solid #d4d3c9;
	font-size: 11px;
	font-family: Verdana;
	font-weight: bold;
	text-align: center;
	flex: none;
`;

const Seat = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 16px;
	height: 15px;
	font-size: 10px;
	text-align: center;
	background-color: #333;
	color: white;
	margin: 1px;
	cursor: pointer;
	visibility: ${props => (props.children === 0 ? 'hidden' : null)};
`;

export default Test;
