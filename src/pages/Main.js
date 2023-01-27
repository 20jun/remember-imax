import React, { useState } from 'react';
import styled from 'styled-components';

import LOGO from '../assets/images/haerin.jpg';

import { IoIosMenu } from 'react-icons/io';

function Main() {
	const [menu, setMenu] = useState(false);

	return (
		<>
			<Common>
				<Home href="/">강꼬양이</Home>
				<LogoImg src={LOGO} />

				<ContlorBox menu={menu}>
					<Contlor href="/connect">계약</Contlor>
					<Contlor href="/login">로그인</Contlor>
					<Contlor href="/signup">회원가입</Contlor>
				</ContlorBox>
				<Menubar
					href="#"
					onClick={() => {
						setMenu(!menu);
					}}
				>
					<IoIosMenu />
				</Menubar>
			</Common>
		</>
	);
}

const Menubar = styled.a`
	display: flex;
	align-items: center;
	font-size: 30px;
	position: absolute;
	right: 32px;
	height: 97px;
	@media screen and (min-width: 500px) {
		display: none;
	}
`;

const Common = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 20px;
	@media screen and (max-width: 500px) {
		flex-direction: column;
	}
`;

const Home = styled.a`
	display: flex;
	align-items: center;
	font-size: 30px;
	margin: 10px;
	text-decoration: none;
	color: black;
	font-weight: bold;
	@media screen and (max-width: 500px) {
		display: none;
	}
`;
const LogoImg = styled.img`
	width: 100px;
`;

const ContlorBox = styled.div`
	display: flex;
	align-items: center;
	@media screen and (max-width: 500px) {
		flex-direction: column;
		align-items: flex-end;
		display: ${({ menu }) => {
			return menu === false ? 'none' : 'flex';
		}};
	}
`;

const Contlor = styled.a`
	margin: 10px;
	text-decoration: none;
	color: black;
`;

export default Main;
