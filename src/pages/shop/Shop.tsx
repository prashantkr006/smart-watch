import { AppBar } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import Btn from '../../components/Btn';
import Logo from '../../Constants/assets/Logo';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';

export default function Shop() {
	return (
		<div>
			<AppBar
				sx={{
					backgroundColor: 'rgba(255,255,255,0.5)',
					display: 'grid',
					gridTemplateColumns: '5rem 1fr 2fr 1fr 5rem',
					alignItems: 'center'
				}}
				position="static"
			>
				<Logo id="logo" />
				<div className="navBtns">
					<Link to="/smart-watch">
						<Btn variant={'outlined'} title="Home" />
					</Link>

					<Link to="/features">
						<Btn variant={'outlined'} title="Features" />
					</Link>
					<Link to="/price">
						<Btn variant={'outlined'} title="price" />
					</Link>
					<Link to="/shop">
						<Btn variant={'outlined'} title="shop" />
					</Link>
					<Link to="/contact">
						<Btn variant={'outlined'} title="contact us" />
					</Link>
				</div>
				<div className="navIcons">
					<ShoppingCartTwoToneIcon style={{ color: '#F57416', height: '3rem' }} />
				</div>
			</AppBar>
			<h1 style={{ color: '#000' }}>Shop</h1>
		</div>
	);
}
