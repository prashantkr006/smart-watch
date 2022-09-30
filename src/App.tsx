import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Features from './pages/features/Features';
import Shop from './pages/shop/Shop';
import Price from './pages/price/Price';
import Cart from './pages/cart/Cart';
import ContactUs from './pages/contact/ContactUs';

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/features" element={<Features />} />
				<Route path="/shop" element={<Shop />} />
				<Route path="/price" element={<Price />} />
				<Route path="/cart" element={<Cart />} />
				<Route path="/contact" element={<ContactUs />} />
			</Routes>
			{/* <RouterProvider router={router} /> */}
		</div>
	);
}

export default App;
