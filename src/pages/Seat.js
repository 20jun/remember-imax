import React, { useState } from 'react';

import styled from 'styled-components';

import 'react-datepicker/dist/react-datepicker.css';
import Modal from '../components/Modal';
import { useForm } from 'react-hook-form';
import moment from 'moment';

function Seat() {
	const [clickedSeatRow, setClickedSeatRow] = useState('');
	const [openModal, setOpenModal] = useState(false);
	const [countIndex, setCountIndex] = useState(0);

	const onClickNumber = (number, toggle) => {
		setClickedSeatRow(number);
		setOpenModal(toggle);
	};

	const handleOnClick = (e, charCode, idx) => {
		setCountIndex({ charCode, idx });
	};

	let numberOnlyArr = [];
	const seatInfoArr = [];

	// 좌석 만들기
	for (let cols = 1; cols <= 16; cols++) {
		// 알파벳 변환
		const charCode = String.fromCharCode(cols + 64);
		numberOnlyArr = [];

		for (let rows = 1; rows <= 45; rows++) {
			numberOnlyArr.push(rows);
		}

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

		seatInfoArr.push({ charCode, numberOnlyArr });
	}

	return (
		<Container>
			{seatInfoArr.map((rows, index) => {
				return (
					<Content key={index}>
						<Row>{rows.charCode}</Row>

						{rows.numberOnlyArr.map((number, index) => {
							const char = `${rows.charCode}${String(number).padStart(2, '0')}`;

							return (
								<Number
									key={index}
									onClick={e => {
										onClickNumber(char, true);
										handleOnClick(e, rows.charCode, index);
									}}
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
		</Container>
	);
}

const Container = styled.div`
	margin-left: 100px;
	width: 100%;
`;

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
	/* background-color: #333; */
	background-color: ${props => (props.selected ? 'pink' : '#333')};
	color: white;
	margin: 1px;
	cursor: pointer;
	visibility: ${props => (props.children === 0 ? 'hidden' : null)};
`;

export default Seat;
