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

export const NotFound = () => {
	const [state1, setState1] = useState(4);
	const [state2, setState2] = useState(0);
	const [state3, setState3] = useState(4);
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
				<div className='flex select-none'>
					<p
						className='font-jetbrains font-extrabold hover:drop-shadow-lg hover:-translate-y-2 active:translate-y-0 ease-in-out duration-200 text-6xl'
						onClick={() => setState1((p) => (p == 9 ? 0 : p + 1))}
					>
						{state1}
					</p>
					<p
						className='font-jetbrains font-extrabold hover:drop-shadow-lg hover:-translate-y-2 active:translate-y-0 ease-in-out duration-200 text-6xl'
						onClick={() => setState2((p) => (p == 9 ? 0 : p + 1))}
					>
						{state2}
					</p>
					<p
						className='font-jetbrains font-extrabold hover:drop-shadow-lg hover:-translate-y-2 active:translate-y-0 ease-in-out duration-200 text-6xl'
						onClick={() => setState3((p) => (p == 9 ? 0 : p + 1))}
					>
						{state3}
					</p>
				</div>
				<p className='font-jetbrains font-bold text-xl mb-4'>Not found</p>
				<p className='text-lg'>{lang('notfound_text')}</p>
				<Link
					className='text underline text-slate-800 hover:text-slate-700 active:text-slate-900 ease-in-out duration-200'
					to={'/'}
				>
					{lang('return')}
				</Link>
			</div>
			<Footer />
		</div>
	);
};
