import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const CategoryListItem = ({
	meals,
	index,
	topCategory,
	setSearchHeading,
	setSearchData,
}) => {
	const [categoryArray, setCategoryArray] = useState('');
	const [imageIndex, setImageIndex] = useState('');
	const navigate = useNavigate();

	const handleNavigate = () => {
		setSearchHeading(topCategory);
		setSearchData(categoryArray);

		navigate(`/search/`);
	};

	useEffect(() => {
		const mealArr =
			topCategory === 'other'
				? meals.filter(
						meal =>
							meal.strCategory.toLocaleLowerCase() === 'goat' ||
							meal.strCategory.toLocaleLowerCase() === 'starter'
				  )
				: topCategory === 'vegetarian'
				? meals.filter(
						meal =>
							meal.strCategory.toLocaleLowerCase() === 'vegetarian' ||
							meal.strCategory.toLocaleLowerCase() === 'vegan'
				  )
				: meals.filter(
						meal =>
							meal.strCategory.toLocaleLowerCase() ===
							topCategory.toLocaleLowerCase()
				  );

		setImageIndex(Math.floor(Math.random() * mealArr.length));

		setCategoryArray(mealArr);
	}, [meals]);

	return (
		categoryArray[0] && (
			<li
				onClick={handleNavigate}
				key={index}>
				<div className='iz categoryImg'>
					<img
						src={categoryArray[imageIndex].strMealThumb}
						alt={categoryArray[imageIndex].strMeal}
					/>
				</div>
				<div className='foodName'>
					<p>{topCategory}</p>
				</div>
			</li>
		)
	);
};

export default CategoryListItem;
