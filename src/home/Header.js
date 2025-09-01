import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GrFormNextLink } from 'react-icons/gr';

const Header = ({ meals, headerMeal, setSearchHeading, setSearchData }) => {
	const navigate = useNavigate();

	const handleNavigate = e => {
		e.preventDefault();

		const mealArr =
			e.target.innerText.toLocaleLowerCase() === 'other'
				? meals.filter(
						meal =>
							meal.strCategory.toLocaleLowerCase().includes('starter') ||
							meal.strCategory.toLocaleLowerCase().includes('goat')
				  )
				: e.target.innerText.toLocaleLowerCase() === 'others'
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
				: e.target.innerText.toLocaleLowerCase() === 'vegetarian'
				? meals.filter(meal =>
						meal.strCategory.toLocaleLowerCase().includes('veg')
				  )
				: meals.filter(
						meal =>
							meal.strCategory
								.toLocaleLowerCase()
								.includes(e.target.innerText.toLocaleLowerCase()) ||
							meal.strArea
								.toLocaleLowerCase()
								.includes(e.target.innerText.toLocaleLowerCase())
				  );

		setSearchHeading(e.target.innerText);
		setSearchData(mealArr);

		navigate(`/search/`);
	};

	return (
		headerMeal && (
			<section className='HomeHeader'>
				<div className='imgBox iz'>
					<img
						src={headerMeal.strMealThumb}
						alt={headerMeal.strMeal}
					/>
				</div>
				<article className='homeHeaderArticle'>
					<p>Meal of the day</p>
					<h2>{headerMeal.strMeal}</h2>
					<div className='homeHeaderBtns'>
						<button
							type='button'
							className='btn'>
							<Link onClick={e => handleNavigate(e)}>
								{headerMeal.strArea.toLocaleLowerCase().includes('dutch') ||
								headerMeal.strArea.toLocaleLowerCase().includes('vietnamese') ||
								headerMeal.strArea.toLocaleLowerCase().includes('uruguayan') ||
								headerMeal.strArea.toLocaleLowerCase().includes('ukrainian') ||
								headerMeal.strArea.toLocaleLowerCase().includes('turkish') ||
								headerMeal.strArea.toLocaleLowerCase().includes('kenyan') ||
								headerMeal.strArea.toLocaleLowerCase().includes('thai') ||
								headerMeal.strArea.toLocaleLowerCase().includes('spanish')
									? 'others'
									: headerMeal.strArea}
							</Link>
						</button>
						<button
							type='button'
							className='btn'>
							<Link onClick={e => handleNavigate(e)}>
								{headerMeal.strCategory.toLocaleLowerCase().includes('goat') ||
								headerMeal.strCategory.toLocaleLowerCase().includes('starter')
									? 'other'
									: headerMeal.strCategory.toLocaleLowerCase().includes('veg')
									? 'vegetarian'
									: headerMeal.strCategory}
							</Link>
						</button>
					</div>
					<button type='button'>
						<Link
							to={`/recipe/${headerMeal.id}`}
							className='btn'>
							<GrFormNextLink />
						</Link>
					</button>
				</article>
			</section>
		)
	);
};

export default Header;
