import React from 'react';
{
	/* <div
	className='w-0 h-0 

'
></div> */
}

const Tooltip = ({ text, children }: { text: string; children: JSX.Element }) => {
	return (
		<div className='has-tooltip'>
			{children}
			<div className='tooltip animate'>
				<div className='items'>
					<div className='container'>{text}</div>
					<div className='arrow'></div>
				</div>
			</div>
		</div>
	);
};

export default Tooltip;
