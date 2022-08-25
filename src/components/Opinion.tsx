import Quote from '../icons/Quote';
import Tooltip from './Tooltip';

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
		<div className='card-bg opinion'>
			<Quote className='quote animate' />
			<div className='container'>
				<p className='text'>{text.opinion}</p>
				<div className='user'>
					<img src={avatar} alt='' className='avatar animate' />
					<p className='name'>{user}</p>
					<p className='about'>{text.about}</p>
				</div>
			</div>
		</div>
	);
};

export default Opinion;
