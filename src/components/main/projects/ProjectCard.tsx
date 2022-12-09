import Tooltip from '../../Tooltip';
import GitHub from '../../../icons/GitHub';
import Globe from '../../../icons/Globe';

type Langs = 'ts' | 'js' | 'py' | 'c' | 'sh' | 'java' | 'rs';

type Options = {
	name: string;
	description: { es: string; en: string };
	lang: Langs;
	github?: string;
	web?: string;
	other?: boolean;
};

const getLongLang = (lan: Langs) => {
	switch (lan) {
		case 'ts':
			return 'TypeScript';
		case 'js':
			return 'JavaScript';
		case 'py':
			return 'Python';
		case 'java':
			return 'Java';
		case 'c':
			return 'C';
		case 'sh':
			return 'Bash';
		case 'rs':
			return 'Rust';
	}
};

const ProjectCard = ({ options }: { options: Options }) => {
	return (
		<div
			className={`flex flex-grow sm:flex-row flex-col
		items-center justify-between
		rounded-lg
		px-6 py-4
		bg-slate-50 bg-opacity-30
		hover:bg-opacity-50 hover:shadow-lg 

		ease-in-out duration-200
		
		${options.other && 'w-full 2xl:w-max'}
		`}
		>
			<div
				className='flex sm:flex-row flex-col
			sm:space-y-0 space-y-2
			sm:space-x-4
			items-center justify-start
			'
			>
				<Tooltip text={getLongLang(options.lang)}>
					<div
						className={`ease-in-out duration-200
					flex
					items-center justify-center
					w-14 h-14
					rounded-md
					font-bold text-xl select-none
					hover:shadow-lg hover:-translate-y-1
					active:translate-y-0
					${options.lang}
					`}
					>
						{options.lang.toUpperCase()}
					</div>
				</Tooltip>
				<div className='flex flex-col sm:items-start items-center space-y-2 pb-4 sm:pb-0'>
					<h1 className='text-slate-800 font-bold'>{options.name}</h1>
					<p className='text-slate-600 font-medium mr-0 sm:mr-4 sm:text-start text-center'>
						{navigator.language == 'es-ES' ? options.description.es : options.description.en}
					</p>
				</div>
			</div>
			<div className='flex sm:flex-row flex-col align-middle'>
				{options.github && (
					<div className='flex sm:flex-row flex-col justify-end items-center'>
						<a
							className='first:mt-2 mb-2 ml-0 sm:first:mt-0 sm:mb-0 sm:ml-4'
							href={`https://github.com/${options.github}`}
							target='_blank'
						>
							<GitHub className='w-10 h-10 fill-slate-800 hover:fill-slate-700 active:fill-slate-900 ease-in-out duration-200' />
						</a>
					</div>
				)}
				{options.web && (
					<div className='flex sm:flex-row flex-col justify-end items-center'>
						<a
							className='first:mt-2 mb-2 ml-0 sm:first:mt-0 sm:mb-0 sm:ml-4'
							href={options.web}
							target='_blank'
						>
							<Globe className='w-10 h-10 fill-slate-800 hover:fill-slate-700 active:fill-slate-900 ease-in-out duration-200' />
						</a>
					</div>
				)}
			</div>
		</div>
	);
};

export default ProjectCard;
