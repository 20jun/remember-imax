import React, { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';

import styled from 'styled-components';
import { Button } from '@mui/material';

function Test() {
	const [authInfo, setAuthInfo] = useState(null);
	const [checkSession, checkSetSession] = useState(null);

	function onGetSession() {
		supabase.auth.getSession().then(res => checkSetSession(res.data.session));
	}

	function onAuthStateChange() {
		supabase.auth.onAuthStateChange((event, session) => {
			console.log('event', event);
			// console.log('session', session);
			if (session && session.provider_token) {
				window.localStorage.setItem('oauth_provider_token', session.provider_token);
			}

			if (session && session.provider_refresh_token) {
				window.localStorage.setItem('oauth_provider_refresh_token', session.provider_refresh_token);
			}

			if (event === 'SIGNED_OUT') {
				window.localStorage.removeItem('oauth_provider_token');
				window.localStorage.removeItem('oauth_provider_refresh_token');
			}
			// console.log('getItem', window.localStorage.getItem('oauth_provider_token'));
		});
	}

	const login = async () => {
		const ttt = await supabase.auth.signInWithOAuth({
			provider: 'google',
			options: {
				redirectTo: 'http://localhost:3000/test',
			},
		});
		setAuthInfo(ttt);
	};

	const logout = async () => {
		await supabase.auth.signOut();
		checkSetSession(null);
	};

	// console.log(authInfo);

	useEffect(() => {
		// console.log(document.cookie);
		onGetSession();
		onAuthStateChange();
	}, []);

	console.log(checkSession);

	return (
		<>
			<Main>
				<Header>로그인 테스트 페이지</Header>

				{checkSession ? <p>로그인 중</p> : <Button onClick={login}>로그인</Button>}
				<Button onClick={logout}>로그아웃</Button>
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
