import { Dispatch, SetStateAction, useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../icons/Navigation';
import lang from '../lang/lang';

const Header = () => {
	const [nav, setNav] = useState(false);

	const Links = ({ className }: { className: string }) => (
		<div className={className}>
			<Link
				className='text-xl text-slate-800 hover:text-slate-700 active:text-slate-900 ease-in-out duration-200'
				to={'/blog'}
			>
				Blog
			</Link>
			<Link
				className='text-xl text-slate-800 hover:text-slate-700 active:text-slate-900 ease-in-out duration-200'
				to={'/courses'}
			>
				{lang('header_courses')}
			</Link>
			<Link
				className='text-xl text-slate-800 hover:text-slate-700 active:text-slate-900 ease-in-out duration-200'
				to={'/github'}
				target='_blank'
			>
				GitHub
			</Link>
			<Link
				className='text-xl text-slate-800 hover:text-slate-700 active:text-slate-900 ease-in-out duration-200'
				to={'/discord'}
				target='_blank'
			>
				Discord
			</Link>
			<Link
				className='text-xl text-slate-800 hover:text-slate-700 active:text-slate-900 ease-in-out duration-200'
				to={'/revolt'}
				target='_blank'
			>
				Revolt
			</Link>
		</div>
	);

	return (
		<div className='flex flex-col'>
			<div
				className=' 
		backdrop-filter backdrop-blur-md
		rounded-lg
		bg-slate-100
		bg-opacity-40
		hover:bg-opacity-50
		
		ease-in-out duration-200 space-x-4

		flex items-center justify-between
		pl-10 sm:pr-10 py-6 pr-4
		'
			>
				<Link to={'/'} className='text-slate-800 font-pacifico text-4xl'>
					Gátomo
				</Link>

				<div className='flex'>
					<Links className='flex space-x-2 sm:space-x-4 justify-end invisible sm:visible sm:w-full w-0' />

					<div onClick={() => setNav((p) => !p)}>
						<Navigation className='visible sm:invisible w-10 h-10 sm:w-0 sm:h-0 mr-6 fill-slate-800 hover:fill-slate-700 active:fill-slate-900 ease-in-out duration-200' />
					</div>
				</div>
			</div>
			<Links
				className={`
				backdrop-filter backdrop-blur-md
				rounded-lg
				bg-slate-100
				bg-opacity-40
				hover:bg-opacity-50
				
				ease-in-out duration-200

				flex flex-col justify-center items-center gap-y-4 

				visible sm:invisible sm:h-0 sm:mt-0 sm:py-0
			${nav ? 'visible translate-y-0 mt-4 py-4' : 'invisible -translate-y-5 h-0 mt-0 py-0'}
			`}
			/>
		</div>
	);
};
/**visible sm:invisible
			flex flex-col items-center justify-between
			gap-y-4
			backdrop-filter backdrop-blur-md
			rounded-lg
			bg-slate-100
			bg-opacity-40
			hover:bg-opacity-50
			
			transition-all
			
			${nav ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}

			text-2xl font-semibold text-slate-800 hover:text-slate-700 active:text-slate-900 */
export default Header;
