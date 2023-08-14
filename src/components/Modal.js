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

import moment from 'moment';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import React, { useEffect, useState } from 'react';

import { Controller, useForm } from 'react-hook-form';
import { PhotoCamera } from '@mui/icons-material';

import axios from 'axios';

function Modal({ clickedSeatRow, openModal, onClickNumber, ...props }) {
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
			TextField: '',
			MUIPicker: moment(new Date()).format('YYYY-MM-DD'),
			Select: 'feel',
			memo: '',
		},
	});

	// 첨부한 이미지의 데이터 저장하는 state
	const [picture, setPicture] = useState(null);

	// 성공적으로 저장 시 발생하는 submit 이벤트
	// data에는 form에 입력한 정보 저장되어 있음
	const onSubmit = data => {
		console.log(data);
		// 선택한 좌석을 초기화하고 모달 창을 닫기 위해 toggle 값 false 전달
		onClickNumber('', false);
		// 모달 창이 다시 열렀을 때 이전에 첨부한 이미지는 없어야 됨
		setPicture(null);
	};

	// 취소 버튼 클릭 시 모달 창 닫기 위한 이벤트
	const handleClose = e => {
		onClickNumber('', false);
	};

	// 모달 창 열릴 시 이벤트
	const handleOpen = e => {
		// onClickNumber('', false);
	};

	// 이미지 관련 함수
	const onChangeImage = e => {
		console.log(e.target.files[0]);

		if (e.target.files[0] !== undefined) {
			setPicture(URL.createObjectURL(e.target.files[0]));
		}
	};

	// 선택한 좌석이 바뀔 때 마다 TextField(좌석번호)의 값을 선택한 좌석번호로 초기화
	useEffect(() => {
		setValue('TextField', clickedSeatRow);
		axios
			.get('/api/test/')
			.then(res => console.log(res))
			.catch();
	}, [clickedSeatRow]);

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
											value={clickedSeatRow}
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
										<Select {...field} value={value} onChange={onChange}>
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
								render={({ field: { onChange, value, ...field } }) => (
									<TextField
										{...field}
										onChange={onChange}
										label="메모"
										multiline
										rows={4}
										placeholder="간단한 후기를 작성해주세요"
									/>
								)}
								name="memo"
								control={control}
							/>
						</Stack>
					</DialogContent>
					<DialogActions>
						<Button onClick={handleClose}>취소</Button>
						<Button type="submit">저장</Button>
					</DialogActions>
				</form>
			</Dialog>
		</>
	);
}

export default Modal;
