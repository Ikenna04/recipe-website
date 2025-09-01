import React from 'react';
import { Link } from 'react-router-dom';

const SearchListItem = ({ searchResult }) => {
	return (
		<li>
			<Link to={`/recipe/${searchResult.id}`}>
				<div className='imgBox iz'>
					<img
						src={searchResult.strMealThumb}
						alt={searchResult.strMeal}
					/>
				</div>
				<p>{searchResult.strMeal}</p>
			</Link>
		</li>
	);
};

export default SearchListItem;
