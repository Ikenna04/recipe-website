import React from 'react';
import { useNavigate } from 'react-router-dom';

const OnDisplayListItem = ({ mealOnDisplay, index }) => {
	const navigate = useNavigate();

	const handleNavigate = id => {
		navigate(`/recipe/${id}`);
	};

	return (
		<li
			onClick={() => handleNavigate(mealOnDisplay.id)}
			key={index}>
			<div className='iz foodPic cp '>
				<img
					src={mealOnDisplay.strMealThumb}
					alt={mealOnDisplay.strMeal}
				/>
			</div>
			<div className='foodName'>
				<p>{mealOnDisplay.strMeal}</p>
			</div>
		</li>
	);
};

export default OnDisplayListItem;
