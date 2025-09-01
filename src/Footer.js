import React from 'react';

const Footer = () => {
	const today = new Date();

	return (
		<footer className='Footer'>
			copyright @pinterest {today.getFullYear()} All rights reserved
		</footer>
	);
};

export default Footer;
