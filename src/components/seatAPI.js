import { supabase } from '../supabaseClient';

export async function getInfo() {
	const getData = await supabase.from('INFO').select();
	return getData;
}

export async function getSeatInfo(seat) {
	const seatData = await supabase.from('INFO').select().eq('seat', seat);
	return seatData;
}

export async function insertInfo(data, uuid) {
	console.log(data, uuid);
	const insertData = await supabase.from('INFO').insert({
		seat: data.TextField,
		selected_at: data.MUIPicker,
		feel: data.SelectMenu,
		imageSrc: `https://eregjxtiwiihjzlslbyu.supabase.co/storage/v1/object/public/seats/public/${uuid}.png`,
		memo: data.memo,
	});
	console.log('insertData:', insertData);
	return insertData;
}

export async function updateInfo(data, id, uuid) {
	console.log(data.picture.length);
	const updateData = await supabase
		.from('INFO')
		.update({
			seat: data.TextField,
			selected_at: data.MUIPicker,
			feel: data.SelectMenu,
			// FIXME: 수정 시 이미지는 그대로 두는 경우에 대한 삼항연산자
			imageSrc:
				data.picture.length > 0
					? `https://eregjxtiwiihjzlslbyu.supabase.co/storage/v1/object/public/seats/public/${uuid}.png`
					: id.imageSrc,
			memo: data.memo,
		})
		.eq('id', id.id);

	return updateData;
}

export async function deleteInfo(id) {
	console.log('진입');
	const deleteInfo = await supabase.from('INFO').delete().eq('id', id.id);

	return deleteInfo;
}

// TODO: 경로와 파일명 수정
export async function uploadImage(data, uuid) {
	const uploadImg = await supabase.storage.from('seats').upload(`public/${uuid}.png`, data);
	console.log(uploadImg);
	return uploadImg;
}

export async function deleteImage(id) {
	const splitName = id.imageSrc.split('/');
	const fileName = splitName[9];
	console.log(fileName);

	const deleteImg = await supabase.storage.from('seats').remove([`public/${fileName}`]);

	return deleteImg;
}
