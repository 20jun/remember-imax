import React, { useState } from 'react';
import styled from 'styled-components';

import moment from 'moment';

import { Controller, useForm } from 'react-hook-form';

import 'react-datepicker/dist/react-datepicker.css';
import Modal from '../components/Modal';
import Seat from './Seat';

function Main() {
	return (
		<>
			<MainContainer>
				<Header>Screen</Header>
				<Seat />
			</MainContainer>
		</>
	);
}

const MainContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Header = styled.div`
	/* text-align: center; */
	font-size: 50px;
	font-weight: 500;
	margin: 50px;
	background-color: ivory;
`;

export default Main;
