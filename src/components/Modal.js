import {
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
			// example: 'hihi',
			TextField: '',
			MUIPicker: moment(new Date()).format('YYYY-MM-DD'),
			Select: 'feel',
			memo: '',
		},
	});

	const onSubmit = data => {
		onClickNumber('', false);
	};

	const handleClose = e => {
		onClickNumber('', false);
	};

	useEffect(() => {
		setValue('TextField', clickedSeatRow);
	}, [clickedSeatRow]);

	return (
		<>
			<Dialog open={openModal} onClose={handleClose}>
				<DialogTitle>메모</DialogTitle>
				<DialogContent>
					<Stack
						direction="column"
						justifyContent="center"
						alignItems="stretch"
						spacing={2}
						onSubmit={handleSubmit(onSubmit)}
					>
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
					<Button onClick={onSubmit}>저장</Button>
				</DialogActions>
			</Dialog>
		</>
	);
}

export default Modal;
