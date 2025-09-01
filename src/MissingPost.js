import React from 'react';
import { Link } from 'react-router-dom';

const MissingPost = () => {
	return (
		<section className='Missing'>
			<p>Well that's disappointing, this post is unavailable</p>
			<button className='btn cp'>
				<Link to='/'>Visit Our Hompage</Link>
			</button>
		</section>
	);
};

export default MissingPost;
