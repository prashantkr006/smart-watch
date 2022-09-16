import React from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Features from './pages/features/Features';
import Shop from './pages/shop/Shop';
import Price from './pages/price/Price';
import Cart from './pages/cart/Cart';
import ContactUs from './pages/contact/ContactUs';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />
	},
	{
		path: '/features',
		element: <Features />
	},
	{
		path: '/shop',
		element: <Shop />
	},
	{
		path: '/price',
		element: <Price />
	},
	{
		path: '/cart',
		element: <Cart />
	},
	{
		path: '/contact',
		element: <ContactUs />
	}
]);

function App() {
	return (
		<div className="App">
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
