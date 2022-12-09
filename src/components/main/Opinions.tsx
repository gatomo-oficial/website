import Quote from '../../icons/Quote';
import Tooltip from '../Tooltip';

import ops from '../../assets/opinion.json';

type lang = {
	opinion: string;
	about: string;
};

type OpinionType = {
	user: string;
	en: lang;
	es: lang;
	avatar: string;
};

const Opinion = ({ user, en, es, avatar }: OpinionType) => {
	const text = navigator.language == 'es-ES' ? es : en;

	return (
		<div
			className='header-footer 
		backdrop-filter backdrop-blur-md
		rounded-lg
		bg-slate-100
		bg-opacity-40
		hover:bg-opacity-50
		
		ease-in-out duration-200

		flex flex-grow
		px-10 py-6 
		w-full
		space-x-4
		items-start
		'
		>
			<Quote className='fill-slate-800 hover:fill-slate-700 w-16 h-16 max-w-full ease-in-out duration-200' />

			<div className='w-full flex flex-col items-start justify-between space-y-3'>
				<p className='text-lg text-slate-800'>{text.opinion}</p>
				<div className='flex space-x-4 items-center'>
					<img
						src={avatar}
						alt=''
						className='rounded-full bg-white w-8 h-8 hover:shadow-lg hover:-translate-y-1 active:translate-y-0 ease-in-out duration-200'
					/>
					<div className='flex flex-col'>
						<p className='text-slate-800 font-bold'>{user}</p>
						<p className='text-slate-700 font-medium mr-4'>{text.about}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

const Opinions = () => {
	const opinions = ops.map((e) => <Opinion avatar={e.avatar} user={e.user} en={e.en} es={e.es} />);
	return <div className='flex flex-col gap-y-6 justify-center lg:grid lg:grid-cols-2 lg:gap-6'>{opinions}</div>;
};

export default Opinions;
