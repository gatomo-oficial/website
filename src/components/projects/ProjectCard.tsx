import Tooltip from '../Tooltip';
import GitHub from '../../icons/GitHub';
import Globe from '../../icons/Globe';

type Langs = 'ts' | 'js' | 'py' | 'c' | 'sh' | 'java';

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
	}
};

const ProjectCard = ({ options }: { options: Options }) => {
	return (
		<div className={`project-card animate ${options.other && 'project-card-sm'}`}>
			<div className='container-one'>
				<Tooltip text={getLongLang(options.lang)}>
					<div className={`animate lang ${options.lang}`}>{options.lang.toUpperCase()}</div>
				</Tooltip>
				<div className='title'>
					<h1 className='name'>{options.name}</h1>
					<p className='description'>
						{navigator.language == 'es-ES' ? options.description.es : options.description.en}
					</p>
				</div>
			</div>
			<div className='container-two'>
				{options.github && (
					<div className='icons'>
						<a className='link' href={`https://github.com/${options.github}`} target='_blank'>
							<GitHub className='icon animate' />
						</a>
					</div>
				)}
				{options.web && (
					<div className='icons'>
						<a className='link' href={options.web} target='_blank'>
							<Globe className='icon animate' />
						</a>
					</div>
				)}
			</div>
		</div>
	);
};

export default ProjectCard;
