import React, { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';

import styled from 'styled-components';
import { Button } from '@mui/material';

function Test() {
	const [authInfo, setAuthInfo] = useState(null);

	const login = async () => {
		const ttt = await supabase.auth.signInWithOAuth({
			provider: 'google',
			options: {
				redirectTo: 'http://localhost:3000/test',
			},
		});
		setAuthInfo(ttt);
	};

	const check = () => {
		console.log('hi');
	};

	console.log(authInfo);

	useEffect(() => {
		console.log(document.cookie);
	}, []);

	return (
		<>
			<Main>
				<Header>로그인 테스트 페이지</Header>
				<Button onClick={login}>로그인 테스트 버튼</Button>
				<Button onClick={check}>체크 버튼</Button>
			</Main>
		</>
	);
}

const Main = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	background-color: gainsboro;
`;

const Header = styled.div`
	font-size: 50px;
	font-weight: 500;
	margin: 50px;
	background-color: ivory;
`;

export default Test;
