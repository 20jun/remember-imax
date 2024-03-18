import { supabase } from '../supabaseClient';

export async function getInfo() {
	const getData = await supabase.from('INFO').select();
	return getData;
}

// todo: user.user.id 네이밍 변경
export async function getSeatInfo(seat, user) {
	console.log(user);

	const seatData = await supabase.from('INFO').select().eq('seat', seat).eq('user', user.user.id);
	console.log(seatData);
	return seatData;
}

// note: 로그인한 계정의 uid로 폴더명을 지정하고, 그 폴더 안에 uuid로 명명된 이미지 저장
// todo: user.user.id 네이밍 변경
export async function insertInfo(data, uuid, user) {
	console.log(data, uuid);
	const insertData = await supabase.from('INFO').insert({
		seat: data.TextField,
		selected_at: data.MUIPicker,
		feel: data.SelectMenu,
		imageSrc: `https://eregjxtiwiihjzlslbyu.supabase.co/storage/v1/object/public/seats/public/${user.user.id}/${uuid}.png`,
		memo: data.memo,
		user: user.user.id,
	});
	console.log('insertData:', insertData);
	return insertData;
}

// todo: user.user.id 네이밍 변경
export async function updateInfo(data, id, uuid, user) {
	console.log(data.picture.length);
	const updateData = await supabase
		.from('INFO')
		.update({
			seat: data.TextField,
			selected_at: data.MUIPicker,
			feel: data.SelectMenu,
			// HACK: 수정 시 이미지는 그대로 두는 경우에 대한 삼항연산자
			imageSrc:
				data.picture.length > 0
					? `https://eregjxtiwiihjzlslbyu.supabase.co/storage/v1/object/public/seats/public/${user.user.id}/${uuid}.png`
					: id.imageSrc,
			memo: data.memo,
			user: user.user.id,
		})
		.eq('id', id.id)
		.eq('user', user.user.id);

	return updateData;
}

// todo: user.user.id 네이밍 변경
export async function deleteInfo(id, user) {
	console.log('진입');
	const deleteInfo = await supabase.from('INFO').delete().eq('id', id.id).eq('user', user.user.id);

	return deleteInfo;
}

// TODO: 경로와 파일명 수정
export async function uploadImage(data, uuid, user) {
	const uploadImg = await supabase.storage
		.from('seats')
		.upload(`public/${user.user.id}/${uuid}.png`, data);
	console.log(uploadImg);
	return uploadImg;
}

// todo: user.user.id 네이밍 변경
export async function deleteImage(id, user) {
	const splitName = id.imageSrc.split('/');
	const fileName = splitName[9];
	console.log(fileName);

	const deleteImg = await supabase.storage
		.from('seats')
		.remove([`public/${user.user.id}/${fileName}`]);

	return deleteImg;
}

// note: 로그인 시 OAuth 제공업체 토큰 저장
export function onAuthStateChange() {
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
	});
}
