import React, { useState } from 'react';

const SignUp = () => {
	const [mail, setMail] = useState('');

	return (
		<section className='SignUp'>
			<h1>Deliciousness in your inbox</h1>
			<p>Enjoy weekly hand picked recipe and recommendations</p>
			<form action=''>
				<label htmlFor='email'>Enter a valid email address</label>
				<input
					type='email'
					id='email'
					name='email'
					placeholder='Email Address'
					required
					value={mail}
					onChange={e => setMail(e.target.value)}
				/>
				<button type='button'>join</button>
			</form>
			<p>
				By joining our community, you agree to our&nbsp;
				<span>Terms and Conditions</span>
			</p>
		</section>
	);
};

export default SignUp;
