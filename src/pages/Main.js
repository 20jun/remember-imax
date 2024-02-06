import React, { useEffect, useState } from 'react';
import Seat from './Seat';

import { createClient } from '@supabase/supabase-js';

import styled from 'styled-components';

import 'react-datepicker/dist/react-datepicker.css';

const supabase = createClient(
	process.env.REACT_APP_SUPABASE_URL,
	process.env.REACT_APP_SUPABASE_KEY,
);

console.log(supabase);
function Main() {
	const [info, setInfo] = useState([]);
	console.log(info);

	useEffect(() => {
		getInfo();
	}, []);

	async function getInfo() {
		const { data } = await supabase.from('INFO').select();
		console.log(data);
		setInfo(data);
	}
	console.log(info);

	return (
		// <>
		// 	<MainContainer>
		// 		<Header>Screen</Header>
		// 		<Seat />
		// 	</MainContainer>
		// </>
		<ul>
			{info.map(ttt => (
				<li key={ttt.id}>
					{ttt.id},{ttt.created_at},{ttt.feel},{ttt.imageSrc}
				</li>
			))}
		</ul>
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
