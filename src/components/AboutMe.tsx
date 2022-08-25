import Chat from '../icons/Chat';
import Film from '../icons/Film';
import Graduation from '../icons/Graduation';
import Location from '../icons/Location';
import Manjaro from '../icons/Manjaro';
import lang from '../lang/lang';

const AboutMe = () => {
	return (
		<div className='card-bg animate about-me'>
			<h1 className='title'>{lang('about_title')}</h1>
			<ul className='list'>
				<li className='item'>
					<Location className='icon animate' />
					<p>{lang('about_location')}</p>
				</li>
				<li className='item'>
					<Graduation className='icon animate' />
					<p>{lang('about_study')}</p>
				</li>
				<li className='item'>
					<Chat className='icon animate' />
					<p>{lang('about_social')}</p>
				</li>

				<li className='item'>
					<Film className='icon animate' />
					<b>{lang('about_serie1')}</b>
					<p>{lang('about_serie2')}</p>
				</li>
				<li className='item'>
					<Manjaro className='icon animate' />
					<b>{lang('about_os1')}</b>
					<p>{lang('about_os2')}</p>
				</li>
			</ul>
		</div>
	);
};

export default AboutMe;
