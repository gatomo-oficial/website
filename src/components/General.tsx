import lang from '../lang/lang';

const General = () => {
	return (
		<div className='card-bg general'>
			<h1 className='hi'>
				{lang('general_hi')} <b>Gátomo</b>
			</h1>
			<p>{lang('general_description')}</p>
			<p>{lang('general_langs')}</p>
		</div>
	);
};

export default General;
