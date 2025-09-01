import React, { useRef } from 'react';
import { BiSearch } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import logo from './assets/image/logo.jpg';
import useWindowSize from './hooks/useWindowSize';

const Header = () => {
	const navRef = useRef(null);
	const menuRef = useRef(null);
	const { width } = useWindowSize();

	const handleNavLinks = e => {
		return (
			width < 992 &&
			(navRef.current.classList.toggle('show'),
			menuRef.current.classList.toggle('close'))
		);
	};

	return (
		<header className='Header'>
			<img
				src={logo}
				alt='Logo'
			/>
			{width < 992 && (
				<div
					className='menu'
					onClick={e => handleNavLinks(e)}>
					<div
						className='menu-icon'
						ref={menuRef}></div>
				</div>
			)}
			<ul
				id='navLinks'
				ref={navRef}>
				<li>
					<Link
						to='/'
						onClick={e => handleNavLinks(e)}>
						Home
					</Link>
				</li>
				<li>
					<Link
						to='/region'
						onClick={e => handleNavLinks(e)}>
						Regions
					</Link>
				</li>
				<li>
					<Link
						to='/category'
						onClick={e => handleNavLinks(e)}>
						Categories
					</Link>
				</li>
				<li>
					<Link
						to='/favorite'
						onClick={e => handleNavLinks(e)}>
						Favorites
					</Link>
				</li>
				{width < 992 && (
					<li onClick={e => handleNavLinks(e)}>
						<button
							type='button'
							className='bs'>
							<Link to='/search'>
								<BiSearch />
							</Link>
						</button>
					</li>
				)}
			</ul>
			{width >= 992 && (
				<Link to='/search'>
					<BiSearch />
				</Link>
			)}
		</header>
	);
};

export default Header;
