import React from 'react';
{
	/* <div
	className='w-0 h-0 

'
></div> */
}

const Tooltip = ({
	text,
	textClassName,
	children
}: {
	text: string;
	textClassName?: string;
	children: JSX.Element;
}) => {
	return (
		<div className='has-tooltip'>
			{children}
			<div className='tooltip'>
				<div className='items'>
					<div className={`container ${textClassName}`}>{text}</div>
					<div className='arrow'></div>
				</div>
			</div>
		</div>
	);
};

export default Tooltip;
