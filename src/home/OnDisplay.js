import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { GrFormNextLink } from 'react-icons/gr';
import OnDisplayListItem from './OnDisplayListItem';

const OnDisplay = ({ onDisplay, meals, filters }) => {
	const [filteredMeals, setFilteredMeals] = useState([]);
	const [mealsOnDisplay, setMealsOnDisplay] = useState([]);

	useEffect(() => {
		const mealArr =
			filters === 'category'
				? onDisplay === 'other'
					? meals.filter(
							meal =>
								meal.strCategory.toLocaleLowerCase().includes('starter') ||
								meal.strCategory.toLocaleLowerCase().includes('goat')
					  )
					: onDisplay === 'vegetarian'
					? meals.filter(meal =>
							meal.strCategory.toLocaleLowerCase().includes('veg')
					  )
					: meals.filter(meal =>
							meal.strCategory
								.toLocaleLowerCase()
								.includes(onDisplay.toLocaleLowerCase())
					  )
				: filters === 'area'
				? onDisplay === 'others'
					? meals.filter(
							meal =>
								meal.strArea.toLocaleLowerCase().includes('dutch') ||
								meal.strArea.toLocaleLowerCase().includes('vietnamese') ||
								meal.strArea.toLocaleLowerCase().includes('uruguayan') ||
								meal.strArea.toLocaleLowerCase().includes('ukrainian') ||
								meal.strArea.toLocaleLowerCase().includes('turkish') ||
								meal.strArea.toLocaleLowerCase().includes('kenyan') ||
								meal.strArea.toLocaleLowerCase().includes('thai') ||
								meal.strArea.toLocaleLowerCase().includes('spanish')
					  )
					: meals.filter(meal =>
							meal.strArea
								.toLocaleLowerCase()
								.includes(onDisplay.toLocaleLowerCase())
					  )
				: '';

		setFilteredMeals(mealArr);
	}, [meals]);

	useEffect(() => {
		const displayArr = [];

		for (let i = 0; i < 3; i++) {
			let randomMealIndex = Math.floor(Math.random() * filteredMeals.length);

			displayArr.unshift(filteredMeals[randomMealIndex]);

			setMealsOnDisplay(displayArr);
		}
	}, [filteredMeals]);

	useEffect(() => {}, [mealsOnDisplay]);

	return (
		mealsOnDisplay[0] && (
			<section className='OnDisplay'>
				<div className='subHead'>
					<h3>{onDisplay} meals</h3>
					<Link
						to='/search'
						className='btn cp'>
						<GrFormNextLink />
					</Link>
				</div>
				<ul className='onDisplayGrid'>
					{mealsOnDisplay.map((mealOnDisplay, index) => {
						return (
							<OnDisplayListItem
								index={index}
								mealOnDisplay={mealOnDisplay}
							/>
						);
					})}
				</ul>
			</section>
		)
	);
};

export default OnDisplay;
