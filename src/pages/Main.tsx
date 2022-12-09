import AboutMe from '../components/main/AboutMe';
import Discord from '../components/main/Discord';
import General from '../components/main/general/General';
import Header from '../components/Header';
import Projects from '../components/main/projects/Projects';
import Opinions from '../components/main/Opinions';
import Footer from '../components/Footer';

export const Main = () => {
	return (
		<div
			className='w-full h-screen
		flex flex-col space-y-6
		'
		>
			<General />
			<div className='xl:flex xl:space-x-6 xl:space-y-0 space-y-6'>
				<AboutMe />
				<Discord />
			</div>
			<Projects />
			<Opinions />
			<Footer />
		</div>
	);
};
