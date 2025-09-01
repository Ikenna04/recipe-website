import React from 'react';
import { Link } from 'react-router-dom';

const FavoriteListItem = ({ favorite }) => {
	return (
		<li key={favorite.id}>
			<Link to={`/recipe/${favorite.id}`}>
				<div className='imgBox iz'>
					<img
						src={favorite.strMealThumb}
						alt={favorite.strMeal}
					/>
				</div>
				<p>{favorite.strMeal}</p>
			</Link>
		</li>
	);
};

export default FavoriteListItem;
