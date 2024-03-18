import React, { useEffect, useState } from 'react';

import Seat from './Seat';
import Auth from '../components/Auth';

import styled from 'styled-components';

import 'react-datepicker/dist/react-datepicker.css';

function Main() {
	const [loginUser, setLoginUser] = useState(null);

	// TODO: 상태관리 라이브러리 사용하여 컴포넌트 간 복잡한 이동 X
	const getLoginUser = async user => {
		setLoginUser(user);
	};

	console.log(loginUser);

	return (
		<MainContainer>
			<Header>Screen</Header>
			<Seat loginUser={loginUser} />
			<Auth getLoginUser={getLoginUser} />
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
