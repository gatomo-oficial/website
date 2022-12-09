import { Link } from 'react-router-dom';
import lang from '../lang/lang';

const Footer = () => {
	return (
		<div
			className='
		flex items-center justify-between
		pl-10 sm:pr-10 py-6 pr-4
		backdrop-filter backdrop-blur-md
		rounded-lg
		bg-slate-100
		bg-opacity-40
		hover:bg-opacity-50
		
		ease-in-out duration-200
		'
		>
			<p className=' text-slate-800 hover:text-slate-700 active:text-slate-900 ease-in-out duration-200'>
				&copy; Gátomo {new Date().getFullYear()}
			</p>
			<div className='flex flex-wrap space-x-2 sm:space-x-4 justify-end text-slate-800 hover:text-slate-700 active:text-slate-900 ease-in-out duration-200'>
				<Link to={'/blog'}>Blog</Link>
				<Link to={'/courses'}>{lang('header_courses')}</Link>
				<Link to={'/github'} target='_blank'>
					GitHub
				</Link>
				<Link to={'/discord'} target='_blank'>
					Discord
				</Link>
				<Link to={'/revolt'} target='_blank'>
					Revolt
				</Link>
			</div>
		</div>
	);
};

export default Footer;
