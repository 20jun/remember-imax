import { supabase } from '../supabaseClient';

export async function getInfo() {
	const getData = await supabase.from('INFO').select();
	return getData;
}

export async function getSeatInfo(seat) {
	const seatData = await supabase.from('INFO').select().eq('seat', seat);
	return seatData;
}

export async function insertInfo(data) {
	const insertData = await supabase.from('INFO').insert({
		seat: data.TextField,
		selected_at: data.MUIPicker,
		feel: data.Select,
		imageSrc: data.picture,
		memo: data.memo,
	});
	console.log('insertData:', insertData);
	return insertData;
}

export async function updateInfo(data, id) {
	const updateData = await supabase
		.from('INFO')
		.update({
			seat: data.TextField,
			selected_at: data.MUIPicker,
			feel: data.Select,
			imageSrc: data.picture,
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
