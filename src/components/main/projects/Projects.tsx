import lang from '../../../lang/lang';
import ProjectCard from './ProjectCard';

import actual from '../../../assets/actual.json';
import projects from '../../../assets/projects.json';

const Projects = () => {
	const workingList = actual.map((e) => (
		<ProjectCard
			key={e.name}
			// @ts-ignore
			options={{ name: e.name, description: e.description, lang: e.lang, github: e.github, web: e.web }}
		/>
	));

	const projectList = projects.map((e) => (
		<ProjectCard
			key={e.name}
			options={{
				other: true,
				name: e.name,
				description: e.description,
				// @ts-ignore
				lang: e.lang,
				github: e.github,
				web: e.web
			}}
		/>
	));

	return (
		<div
			className='header-footer 
		backdrop-filter backdrop-blur-md
		rounded-lg
		bg-slate-100
		bg-opacity-40
		hover:bg-opacity-50
		
		ease-in-out duration-200
		flex flex-col px-10 py-6 space-y-4 first:mt-0
		'
		>
			<h1 className='font-bold text-slate-900 text-xl'>{lang('projects_title')}</h1>
			<p>{lang('projects_description')}</p>
			<div className='flex flex-col space-y-4'>
				<h1 className='font-semibold text-slate-800 text-lg'>{lang('projects_working')}</h1>
				<table className='flex flex-col space-y-5 px-0'>{workingList}</table>
			</div>
			<div className='flex flex-col space-y-4'>
				<h1 className='font-semibold text-slate-800 text-lg'>{lang('projects_others')}</h1>
				<table className='flex flex-wrap flex-row px-0 gap-x-6 gap-y-4'>{projectList}</table>
			</div>
		</div>
	);
};

export default Projects;
