import React, { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';

import { Button } from '@mui/material';

import styled from 'styled-components';

function Login() {
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
				redirectTo: 'http://localhost:3000',
			},
		});
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
		<LoginAndLogout>
			{checkSession ? (
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

export default Login;
