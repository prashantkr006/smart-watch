import React from 'react';
import './home.css';
import { ReactComponent as LandPageImg } from '../../Constants/assets/amico.svg';
import Nav from '../../components/Nav';

export default function Home() {
	return (
		<div className="home__container">
			<Nav />
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
