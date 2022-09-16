import React from 'react';
import Logo from '../../Constants/assets/Logo';
import Btn from '../../components/Btn';
import './home.css';
import AppBar from '@mui/material/AppBar';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import ForumTwoToneIcon from '@mui/icons-material/ForumTwoTone';
import { ReactComponent as LandPageImg } from '../../Constants/assets/amico.svg';
import { Link } from 'react-router-dom';

export default function Home() {
	return (
		<div className="home__container">
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
					<Link to="https://prashantkr006.github.io/smart-watch/">
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
					<ForumTwoToneIcon style={{ color: '#F57416', height: '3rem' }} />
				</div>
			</AppBar>
			<div className="body__container">
				<div className="title__container">
					<h1 className="pro__txt">Pro</h1>
					<h1 className="smart_watches_txt">Smart Watches</h1>
					<h1 className="smart_ppl_txt">For Smart People</h1>
				</div>
				<LandPageImg className="LandingPageImg" />
			</div>
		</div>
	);
}
