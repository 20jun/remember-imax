import React, { useState, useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { supabase } from '../supabaseClient';

import moment from 'moment';

import {
	Box,
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	MenuItem,
	Select,
	Stack,
	TextField,
} from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { PhotoCamera } from '@mui/icons-material';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { insertInfo, updateInfo, deleteInfo, getInfo, getSeatInfo } from './seatAPI';

// TODO: local에 메모 저장
function Modal({ clickedSeatRow, openModal, onClickNumber, infoAll, checkId, ...props }) {
	console.log('openModel true되어 Modal 컴포넌트 실행');
	const {
		register,
		handleSubmit,
		watch,
		control,
		getValues,
		reset,
		setValue,
		formState: { errors },
	} = useForm({
		defaultValues: {
			TextField: checkId ? checkId?.seat : clickedSeatRow,
			MUIPicker: checkId ? checkId?.selected_at : moment(new Date()).format('YYYY-MM-DD'),
			Select: checkId ? checkId?.feel : 'feel',
			memo: checkId ? checkId?.memo : '',
		},
	});

	// 첨부한 이미지의 데이터 저장하는 state
	const [picture, setPicture] = useState(null);
	const [insertAndUpdate, setInsertAndUpdate] = useState('저장');

	const [changeData, setChangeData] = useState(null);
	const [resetData, setResetData] = useState({});

	// DB에 변화가 있을 때 실행됨
	const channelA = supabase
		.channel('table-db-changes')
		.on(
			'postgres_changes',
			{
				event: '*',
				schema: 'public',
			},
			payload => {
				console.log('change작동', payload);
				setChangeData(payload);
			},
		)
		.subscribe();

	const onClickDeleteButton = () => {
		deleteInfo(checkId);
		onClickNumber('', false);
	};

	// 성공적으로 저장 시 발생하는 submit 이벤트
	// data에는 form에 입력한 정보 저장되어 있음
	const onSubmit = data => {
		if (insertAndUpdate === '저장') {
			console.log('저장:', data);
			insertInfo(data);
		} else {
			console.log('수정:', data);
			updateInfo(data, checkId);
		}

		// 선택한 좌석을 초기화하고 모달 창을 닫기 위해 toggle 값 false 전달
		onClickNumber('', false);
		// 모달 창이 다시 열렀을 때 이전에 첨부한 이미지는 없어야 됨
		setPicture(null);
	};

	// 취소 버튼 클릭 시 모달 창 닫기 위한 이벤트
	const handleClose = e => {
		onClickNumber('', false);
	};

	// 이미지 관련 함수
	const onChangeImage = e => {
		console.log(e.target.files[0]);

		if (e.target.files[0] !== undefined) {
			setPicture(URL.createObjectURL(e.target.files[0]));
		}
	};

	useEffect(() => {
		console.log('openModal 값에 따라 재렌더링하는 useEffect이고 이 때의 checkId값:', checkId);
		if (checkId) {
			setInsertAndUpdate('수정');
			getSeatInfo(clickedSeatRow).then(res => {
				setValue('TextField', res.data[0].seat);
				setValue('MUIPicker', moment(res.data[0].selected_at).format('YYYY-MM-DD'));
				setValue('Select', res.data[0].feel);
				setValue('memo', res.data[0].memo);
			});
		}
	}, [openModal]);

	return (
		<>
			<Dialog open={openModal} onClose={handleClose} fullWidth>
				<form onSubmit={handleSubmit(onSubmit)}>
					<DialogTitle>메모</DialogTitle>
					<DialogContent>
						<Stack direction="column" justifyContent="center" alignItems="stretch" spacing={2}>
							<DialogContentText>후기를 작성해주세요.</DialogContentText>
							<Controller
								name="TextField"
								control={control}
								render={({ field }) => {
									return (
										<TextField
											label="좌석"
											// value={clickedSeatRow}
											InputProps={{
												readOnly: true,
											}}
											{...field}
										/>
									);
								}}
							/>
							<LocalizationProvider dateAdapter={AdapterMoment}>
								<Controller
									name="MUIPicker"
									control={control}
									render={({ field: { value, ...field } }) => {
										return (
											<DatePicker
												value={value}
												label="날짜 선택"
												inputFormat="YYYY-MM-DD"
												renderInput={params => <TextField {...params} />}
												onChange={selectedDate =>
													setValue('MUIPicker', moment(selectedDate).format('YYYY-MM-DD'))
												}
											/>
										);
									}}
								/>
							</LocalizationProvider>
							<Controller
								name="Select"
								control={control}
								render={({ field: { value, onChange, ...field } }) => {
									return (
										<Select {...field} defaultValue={'feel'} onChange={onChange}>
											<MenuItem value={'feel'}>자리는 어떠셨나요</MenuItem>
											<MenuItem value={'good'}>좋아요</MenuItem>
											<MenuItem value={'soso'}>보통이에요</MenuItem>
											<MenuItem value={'bad'}>별로에요</MenuItem>
										</Select>
									);
								}}
							/>

							<Box
								onChange={onChangeImage}
								component="label"
								sx={{
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									border: '1px dashed grey',
									height: 300,
								}}
							>
								<input {...register('picture')} accept="image/*" hidden multiple type="file" />
								{picture ? (
									<img
										style={{ objectFit: 'contain', width: '100%', height: '100%' }}
										src={picture}
									/>
								) : (
									<PhotoCamera sx={{}} color="primary" fontSize="large" />
								)}
							</Box>
							<Controller
								name="memo"
								control={control}
								render={({ field: { onChange, value, ...field } }) => (
									<TextField
										{...field}
										value={value}
										onChange={onChange}
										label="메모"
										multiline
										rows={4}
										placeholder="간단한 후기를 작성해주세요"
									/>
								)}
							/>
						</Stack>
						<DialogActions>
							{checkId ? <Button onClick={onClickDeleteButton}>삭제</Button> : null}
							<Box sx={{ flexGrow: 1 }} />
							<Button onClick={handleClose}>취소</Button>
							<Button type="submit">{insertAndUpdate}</Button>
						</DialogActions>
					</DialogContent>
				</form>
			</Dialog>
		</>
	);
}

export default Modal;
