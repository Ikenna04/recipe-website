import React, { useEffect, useState } from 'react';
import MissingPost from './MissingPost';
import FavoriteListItem from './FavoriteListItem';
import { Link, useNavigate } from 'react-router-dom';
import { GrLinkPrevious } from 'react-icons/gr';

const Favorites = ({ isLoading, fetchError, meals }) => {
	const [favorites, setFavorites] = useState([]);

	const navigate = useNavigate();

	useEffect(() => {
		setFavorites(meals.filter(meal => meal.favorite));
	}, [meals]);

	return (
		<main className='Favorites'>
			<Link
				onClick={e => navigate(-1)}
				className='back btn'>
				<GrLinkPrevious />
				Back
			</Link>
			<h2>favorites</h2>
			{isLoading && (
				<p
					style={{
						padding: '48px',
						color: 'rebeccapurple',
						textAlign: 'center',
					}}>
					Loading ...
				</p>
			)}
			{fetchError && !isLoading && (
				<p
					style={{
						padding: '48px',
						color: 'red',
						textAlign: 'center',
					}}>
					{fetchError}
				</p>
			)}
			{favorites ? (
				!fetchError &&
				!isLoading && (
					<ul>
						{favorites.map(favorite => (
							<FavoriteListItem favorite={favorite} />
						))}
					</ul>
				)
			) : (
				<MissingPost />
			)}
		</main>
	);
};

export default Favorites;
