import Discord from '../icons/Discord';
import GitHub from '../icons/GitHub';
import Home from '../icons/Home';

const Footer = () => {
	return (
		<div className='header-footer card-bg'>
			<p className='title-footer'>&copy; Gátomo {new Date().getFullYear()}. All rights reserved.</p>
			<div className='links'>
				<a className='link-text' href='https://github.com/gatomo-oficial' target='_blank'>
					GitHub
				</a>
				<a className='link-text' href='https://discord.gg/E2yBpMq2Km' target='_blank'>
					Discord
				</a>
			</div>
		</div>
	);
};

export default Footer;
