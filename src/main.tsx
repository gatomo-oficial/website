import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import {
	BrowserRouter,
	Navigate,
	redirect,
	Route,
	Routes,
	RedirectFunction,
	useNavigate,
	Link
} from 'react-router-dom';

import Footer from './components/Footer';
import Header from './components/Header';
import './index.css';
import { Main } from './pages/Main';
import { NotFound } from './pages/NotFound';

import wallpaper1 from './assets/wallpapers/wallpaper_1.jpg';
import wallpaper2 from './assets/wallpapers/wallpaper_2.jpg';
import wallpaper3 from './assets/wallpapers/wallpaper_3.jpg';
import wallpaper4 from './assets/wallpapers/wallpaper_4.jpg';
import wallpaper5 from './assets/wallpapers/wallpaper_5.jpg';
import { ComingSoon } from './pages/ComingSoon';
import lang from './lang/lang';

const random = (arr: any[]) => {
	return arr[Math.floor(Math.random() * arr.length)];
};
const getImage = () => {
	const wallpapers = [wallpaper1, wallpaper2, wallpaper3, wallpaper4, wallpaper5];
	return random(wallpapers);
};

const Redirect = ({ url }: { url: string }) => {
	useEffect(() => {
		window.location.replace(url);
	}, []);

	return (
		<div
			className=' 
		backdrop-filter backdrop-blur-md
		rounded-lg
		bg-slate-100
		bg-opacity-40
		hover:bg-opacity-50
		
		ease-in-out duration-200 px-8 py-6 flex flex-col items-center space-y-4'
		>
			<p className=' font-jetbrains text-xl font-bold'>Redirecting...</p>
			<p className='text-slate-900'>
				Not working? <a href={url}>Click here!</a>
			</p>
		</div>
	);
};

const Page = () => {
	const [wallp, setWallp] = useState(getImage());

	return (
		<React.StrictMode>
			<BrowserRouter>
				<div
					className='
					flex flex-col
					space-y-6 text-neutral-900 font-medium
					overflow-y-scroll
					sm:px-10 px-2 py-6
					w-full h-screen
					bg-cover bg-bottom bg-no-repeat
			'
					style={{
						backgroundImage: `url("${wallp}")`
					}}
				>
					<Header />

					<Routes>
						<Route path='/' element={<Main />} />
						<Route path='/blog' element={<ComingSoon />} />
						<Route path='/courses' element={<ComingSoon />} />
						<Route path='/github' element={<Redirect url='https://github.com/gatomo-oficial' />} />

						<Route path='/discord' element={<Redirect url='https://discord.gg/E2yBpMq2Km' />} />
						<Route path='/revolt' element={<Redirect url='https://rvlt.gg/fX4a7k1B' />} />

						<Route path='*' element={<NotFound />} />
					</Routes>
				</div>
			</BrowserRouter>
		</React.StrictMode>
	);
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<Page />);
