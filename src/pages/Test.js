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
			console.log(numberOnlyArr);
		}

		seatInfoArr.push({ charCode, numberOnlyArr });
	}

	console.log(seatInfoArr);
	return (
		<div>
			{seatInfoArr.map((arg, index) => {
				return (
					<div style={{ display: 'flex' }}>
						<ColCodes>{arg.charCode}</ColCodes>

						{arg.numberOnlyArr.map((iii, index) => {
							return (
								<div>
									<Seat key={index}>{iii}</Seat>
								</div>
							);
						})}
					</div>
				);
			})}
		</div>
	);
}

const ColCodes = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 12px;
	height: 15px;
	font-size: 12px;
	text-align: center;
	background-color: #333;
	color: white;
	margin: 1px;
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
