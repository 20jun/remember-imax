import React, { useEffect, useState } from 'react';

import Seat from './Seat';
import Login from '../components/Login';

import styled from 'styled-components';

import 'react-datepicker/dist/react-datepicker.css';

function Main() {
	return (
		<MainContainer>
			<Header>Screen</Header>
			<Seat />
			<Login />
		</MainContainer>
	);
}

const MainContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Header = styled.div`
	font-size: 50px;
	font-weight: 500;
	margin: 50px;
	background-color: ivory;
`;

export default Main;
