import React from 'react';
import { Button } from '@mui/material';

export default function Btn(props: any) {
	return (
		<Button
			sx={{
				borderColor: '#F57416',
				color: '#F57416',
				borderRadius: 10,
				width: 150,
				':hover': {
					backgroundColor: '#F57416',
					color: '#FFFFFF',
					borderColor: '#F57416',
					borderRadius: 10
				}
			}}
			variant={props.variant}
			onClick={props.onClick}
		>
			{props.title}
		</Button>
	);
}
