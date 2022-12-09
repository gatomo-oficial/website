import Chat from '../../icons/Chat';
import Film from '../../icons/Film';
import Graduation from '../../icons/Graduation';
import Location from '../../icons/Location';
import Manjaro from '../../icons/Manjaro';
import lang from '../../lang/lang';

const AboutMe = () => {
	return (
		<div
			className='header-footer 
		backdrop-filter backdrop-blur-md
		rounded-lg
		bg-slate-100
		bg-opacity-40
		hover:bg-opacity-50
		
		ease-in-out duration-200

		flex flex-col px-10 py-6 space-y-4 flex-grow
		'
		>
			<h1 className='font-bold text-slate-900 text-xl'>{lang('about_title')}</h1>
			<ul className='flex flex-col space-y-3'>
				<li className='flex space-x-2 items-center justify-start'>
					<Location className='fill-slate-800 hover:fill-slate-700 w-7 h-7 ease-in-out duration-200' />
					<p>{lang('about_location')}</p>
				</li>
				<li className='flex space-x-2 items-center justify-start'>
					<Graduation className='fill-slate-800 hover:fill-slate-700 w-7 h-7 ease-in-out duration-200' />
					<p>{lang('about_study')}</p>
				</li>
				<li className='flex space-x-2 items-center justify-start'>
					<Chat className='fill-slate-800 hover:fill-slate-700 w-7 h-7 ease-in-out duration-200' />
					<p>{lang('about_social')}</p>
				</li>

				<li className='flex space-x-2 items-center justify-start'>
					<Film className='fill-slate-800 hover:fill-slate-700 w-7 h-7 ease-in-out duration-200' />
					<p>{lang('about_serie2')}</p>
				</li>
			</ul>
		</div>
	);
};

export default AboutMe;
