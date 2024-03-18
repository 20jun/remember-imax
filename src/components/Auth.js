import React, { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';

import { Button } from '@mui/material';

import styled from 'styled-components';
import { onAuthStateChange } from './seatAPI';

function Auth(props) {
	// 세션(로그인) 유무 확인
	const [checkSession, checkSetSession] = useState(null);

	// 현재 로컬 세션 검색
	const onGetSession = async () => {
		const { data, error } = await supabase.auth.getSession();
		console.log(data);
		if (!error) {
			checkSetSession(data);
			props.getLoginUser(data.session);
		}
	};

	// 로그인 함수
	const login = async () => {
		const ttt = await supabase.auth.signInWithOAuth({
			provider: 'google',
			options: {
				redirectTo: 'http://localhost:3000',
			},
		});
	};

	// 로그아웃 함수
	const logout = async () => {
		await supabase.auth.signOut();
		checkSetSession(null);
		props.getLoginUser(null);
	};

	useEffect(() => {
		onGetSession();
		onAuthStateChange();
	}, []);

	console.log(checkSession);

	return (
		// TODO: @@@님 환영합니다 메세지
		<LoginAndLogout>
			{checkSession?.session ? (
				<Button onClick={logout}>로그아웃</Button>
			) : (
				<Button onClick={login}>로그인</Button>
			)}
		</LoginAndLogout>
	);
}

const LoginAndLogout = styled.div`
	position: absolute;
	right: 0;
	bottom: 0;
`;

export default Auth;
