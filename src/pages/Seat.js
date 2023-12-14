import React, { useState } from 'react';

import Modal from '../components/Modal';
import createSeat from '../components/createSeat';

import 'react-datepicker/dist/react-datepicker.css';
import styled from 'styled-components';

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

	// 좌석 생성
	const seatInfoArr = createSeat();
	console.log('seatInfoArr:', seatInfoArr);

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
