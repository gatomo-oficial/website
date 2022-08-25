import AboutMe from '../components/AboutMe';
import Discord from '../components/Discord';
import General from '../components/General';
import Header from '../components/Header';
import Projects from '../components/projects/Projects';
import Opinion from '../components/Opinion';

import ops from '../assets/opinion.json';
import Footer from '../components/Footer';

export const Main = () => {
	const opinions = ops.map((e) => <Opinion avatar={e.avatar} user={e.user} en={e.en} es={e.es} />);

	return (
		<div className='main'>
			<Header />
			<General />
			<div className='card-row'>
				<AboutMe />
				<Discord />
			</div>
			<Projects />
			{opinions}
			<Footer />
		</div>
	);
};
