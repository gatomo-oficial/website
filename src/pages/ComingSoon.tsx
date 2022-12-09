import AboutMe from '../components/main/AboutMe';
import Discord from '../components/main/Discord';
import General from '../components/main/general/General';
import Header from '../components/Header';
import Projects from '../components/main/projects/Projects';
import Opinions from '../components/main/Opinions';

import Footer from '../components/Footer';
import { useState } from 'react';
import lang from '../lang/lang';
import { Link } from 'react-router-dom';

export const ComingSoon = () => {
	return (
		<div className='flex flex-col flex-grow gap-y-6'>
			<div
				className='flex flex-col justify-center items-center h-full
			backdrop-filter backdrop-blur-md
			rounded-lg
			bg-slate-100
			bg-opacity-40
			hover:bg-opacity-50
			
			ease-in-out duration-200
			'
			>
				<div className='flex'>
					<p className='font-jetbrains font-extrabold hover:drop-shadow-lg hover:-translate-y-2 active:translate-y-0 ease-in-out duration-200 text-4xl'>
						{lang('coming_soon_title')}
					</p>
				</div>
				<p className='text-lg'>{lang('coming_soon_desc')}</p>
				<Link
					className='text-lg underline text-slate-800 hover:text-slate-700 active:text-slate-900 ease-in-out duration-200'
					to={'/'}
				>
					{lang('return')}
				</Link>
			</div>
			<Footer />
		</div>
	);
};
