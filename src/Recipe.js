import React, { useEffect, useRef, useState } from 'react';
import { GiHearts } from 'react-icons/gi';
import { Link, useNavigate, useParams } from 'react-router-dom';
import api from './api/post';
import { GrLinkPrevious } from 'react-icons/gr';
import IngredientList from './IngredientList';
import ReactPlayer from 'react-player';

const Recipe = ({ meals, setMeals, setSearchHeading, setSearchData }) => {
	const [meal, setMeal] = useState(null);
	const [ingredientList, setIngredientList] = useState([]);

	const favRef = useRef(null);
	const { id } = useParams();
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

	const handleEdit = async id => {
		meal.favorite = !meal.favorite;

		try {
			const response = await api.patch(`/meals/${id}`, meal);

			setMeals(
				meals.map(meal => (meal.id === id ? { ...response.data } : meal))
			);
		} catch (err) {
			console.log(`Error: ${err.message}`);
		}
	};

	useEffect(() => {
		setMeal(meals.find(meal => meal.id.toString() === id));
	}, [meals]);

	useEffect(() => {
		let count = 1,
			ingredients = [];
		for (const i in meal) {
			let ingredient = '';
			let measure = '';
			if (i.startsWith('strIngredient') && meal[i]) {
				ingredient = meal[i];
				measure = meal['strMeasure' + count];
				count++;
				ingredients.push(`${measure} ${ingredient}`);

				setIngredientList(ingredients);
			}
		}
	}, [meal]);

	return (
		meal && (
			<main className='Recipe'>
				<Link
					onClick={e => navigate(-1)}
					className='back btn'>
					<GrLinkPrevious />
					Back
				</Link>
				<div className='subHead'>
					<h2>{meal.strMeal}</h2>
					<div
						id={meal.favorite ? 'faved' : ''}
						ref={favRef}
						className='fav cp btn'
						onClick={e => handleEdit(meal.id)}>
						<GiHearts />
					</div>
				</div>
				<div className='imgBox'>
					<img
						src={meal.strMealThumb}
						alt={meal.strMeal}
					/>
				</div>
				<div className='btnPlusIngredient'>
					<div className='homeHeaderBtns'>
						<button
							type='button'
							className='btn'>
							<Link onClick={e => handleNavigate(e)}>
								{meal.strArea.toLocaleLowerCase().includes('dutch') ||
								meal.strArea.toLocaleLowerCase().includes('vietnamese') ||
								meal.strArea.toLocaleLowerCase().includes('uruguayan') ||
								meal.strArea.toLocaleLowerCase().includes('ukrainian') ||
								meal.strArea.toLocaleLowerCase().includes('turkish') ||
								meal.strArea.toLocaleLowerCase().includes('kenyan') ||
								meal.strArea.toLocaleLowerCase().includes('thai') ||
								meal.strArea.toLocaleLowerCase().includes('spanish')
									? 'others'
									: meal.strArea}
							</Link>
						</button>
						<button
							type='button'
							className='btn'>
							<Link onClick={e => handleNavigate(e)}>
								{meal.strCategory.toLocaleLowerCase().includes('goat') ||
								meal.strCategory.toLocaleLowerCase().includes('starter')
									? 'other'
									: meal.strCategory.toLocaleLowerCase().includes('veg')
									? 'vegetarian'
									: meal.strCategory}
							</Link>
						</button>
					</div>

					<div className='ingredients'>
						<h3>Ingredients</h3>
						{ingredientList.map((ingredient, index) => (
							<IngredientList
								ingredient={ingredient}
								index={index}
							/>
						))}
					</div>
				</div>
				<div className='player'>
					<ReactPlayer
						url={meal.strYoutube}
						playing
						controls
						id='player'
						style={{ maxWidth: '100%', maxHeight: '100%' }}
					/>
				</div>
				<div className='procedure'>
					<h3>Procedure</h3>
					<pre>{meal.strInstructions}</pre>
				</div>
			</main>
		)
	);
};

export default Recipe;
