import lang from '../../lang/lang';
import ProjectCard from './ProjectCard';

import actual from '../../assets/actual.json';
import projects from '../../assets/projects.json';

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
		<div className='card-bg projects'>
			<h1 className='title'>{lang('projects_title')}</h1>
			<p>{lang('projects_description')}</p>
			<div className='section'>
				<h1 className='title'>{lang('projects_working')}</h1>
				<table className='projects'>{workingList}</table>
			</div>
			<div className='section'>
				<h1 className='title'>{lang('projects_others')}</h1>
				<table className='projects-row'>{projectList}</table>
			</div>
		</div>
	);
};

export default Projects;
