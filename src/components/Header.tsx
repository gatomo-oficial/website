import Discord from '../icons/Discord';
import GitHub from '../icons/GitHub';
import Home from '../icons/Home';

const Header = () => {
	return (
		<div className='header-footer card-bg'>
			<p className='title-header'>Gátomo</p>
			<div className='links'>
				<a href=''>
					<Home className='link animate' />
				</a>
				<a href='https://github.com/gatomo-oficial' target='_blank'>
					<GitHub className='link animate' />
				</a>
				<a href='https://discord.gg/E2yBpMq2Km' target='_blank'>
					<Discord className='link animate' />
				</a>
			</div>
		</div>
	);
};

export default Header;
