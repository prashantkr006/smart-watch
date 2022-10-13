import { AppBar } from '@mui/material';
import { Link } from 'react-router-dom';
import Logo from '../Constants/assets/Logo';
import Btn from './Btn';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import MenuIcon from '@mui/icons-material/Menu';
import React, { useState } from 'react';

export default function Nav() {
	const [showMediaIcon, setShowMediaIcon] = useState(false);
	return (
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
			<div className={showMediaIcon ? 'navBtns mobile-menu-link' : 'navBtns'}>
				<Link to="/">
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
			{/* Menu Icon */}
			<div className="menu">
				{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
				<a
					href="#"
					onClick={() => {
						setShowMediaIcon(!showMediaIcon);
						console.log(showMediaIcon);
					}}
				>
					<MenuIcon style={{ color: '#F57416', height: '4rem' }} />
				</a>
			</div>
		</AppBar>
	);
}
