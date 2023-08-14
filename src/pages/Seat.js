import React, { useState } from 'react';

import styled from 'styled-components';

import 'react-datepicker/dist/react-datepicker.css';
import Modal from '../components/Modal';

function Seat() {
	// 클릭한 좌석의 열과 번호 합쳐서 저장
	// A29, D17 ...
	const [clickedSeatRow, setClickedSeatRow] = useState('');
	// 모달창 열고 닫는 토글
	const [openModal, setOpenModal] = useState(false);
	// 클릭한 좌석의 열과 번호를 객체로 저장
	// {charCode: 'A', idx: 29}
	const [countIndex, setCountIndex] = useState(0);

	// 좌석 클릭
	// number: A29
	// toggle: true & false
	const onClickNumber = (number, toggle) => {
		setClickedSeatRow(number);
		setOpenModal(toggle);
	};
	// 좌석 클릭
	// e: event
	// charCode: 'A', 'B' ...
	// idx: 29, 17 ...
	const handleOnClick = (e, charCode, idx) => {
		setCountIndex({ charCode, idx });
	};

	// A열부터 P열까지 각 1열마다 좌석의 존재유무 저장하는 배열
	// 없는 좌석인 경우 0, 있는 좌석인 경우에는 숫자 저장
	let numberOnlyArr = [];
	// 알파벳으로 열을 표현하고 각 열마다 numberOnlyArr 배열을 넣어 전체 좌석의 정보를 저장하는 배열
	// [{charCode: 'A', numberOnlyArr [0,0,1,2,3 ...]}, {charCode: 'B', numberOnlyArr [0,0,1,2,3 ...]}]
	const seatInfoArr = [];

	// 좌석을 만들기 위한 for문
	// cols(행)가 A에서 P까지
	for (let cols = 1; cols <= 16; cols++) {
		// 알파벳 변환
		const charCode = String.fromCharCode(cols + 64);
		// 다음 열을 생성하기 위해 배열 초기화
		numberOnlyArr = [];
		// rows(열)가 1부터 45까지
		for (let rows = 1; rows <= 45; rows++) {
			// 1부터 45까지 numberOnlyArr에 저장
			// [1,2,3,4,5 ...]
			numberOnlyArr.push(rows);
		}

		// 없는 좌석을 위한 if 문
		// CGV 좌석을 기준으로 구현하였으며 언제든지 변경될 수 있음.
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

	return (
		<div>
			{seatInfoArr.map((rows, index) => {
				return (
					<Content key={index}>
						{/* 알파벳 표시 */}
						<Row>{rows.charCode}</Row>

						{rows.numberOnlyArr.map((number, index) => {
							// 변수 char에 알파벳 행과 해당 열의 번호를 붙여서 문자열로 저장(번호가 한 자리인 경우 십의 자리에 0을 붙여 저장)
							// A27, D19 ...
							const char = `${rows.charCode}${String(number).padStart(2, '0')}`;

							return (
								<Number
									key={index}
									onClick={e => {
										// 좌석 클릭 시 변수 char와 toggle값으로 true 전달
										onClickNumber(char, true);
										handleOnClick(e, rows.charCode, index);
										console.log('1', countIndex, '2', rows);
									}}
									// 클릭한(선택한) 좌석의 행과 열이 현재 생성된 좌석의 정보와 일치하는지 확인하고
									// openModal까지 true인 경우 selected = true
									// todo
									selected={
										countIndex.charCode === rows.charCode && countIndex.idx === index && openModal
											? true
											: false
									}
								>
									{number}
								</Number>
							);
						})}
					</Content>
				);
			})}
			<Modal clickedSeatRow={clickedSeatRow} openModal={openModal} onClickNumber={onClickNumber} />
		</div>
	);
}

const Content = styled.div`
	display: flex;
`;

const Row = styled.div`
	display: flex;
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

const Number = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 16px;
	height: 15px;
	font-size: 10px;
	text-align: center;
	/* 좌석이 선택된 경우 선택된 좌석의 색상을 gray로 변경 */
	background-color: ${props => (props.selected ? 'gray' : '#333')};
	color: white;
	margin: 1px;
	cursor: pointer;
	/* 좌석이 없는 경우(배열에 저장되어 있는 0) 숨김 처리 */
	visibility: ${props => (props.children === 0 ? 'hidden' : null)};
`;

export default Seat;
