import React from 'react';
import { Link } from 'react-router-dom';

const Missing = () => {
	return (
		<main className='Missing'>
			<h1>404</h1>
			<p>Well that's disappointing</p>
			<button className='btn cp'>
				<Link to='/'>Visit Our Hompage</Link>
			</button>
		</main>
	);
};

export default Missing;
