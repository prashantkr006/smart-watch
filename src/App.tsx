import React from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Features from './pages/Features';
import Shop from './pages/Shop';

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
