import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CategoriesListItem = ({
	meals,
	category,
	setSearchHeading,
	setSearchData,
}) => {
	const [categoryArray, setCategoryArray] = useState('');
	const [imageIndex, setImageIndex] = useState('');
	const navigate = useNavigate();

	const handleNavigate = () => {
		setSearchHeading(category);
		setSearchData(categoryArray);

		navigate(`/search/`);
	};

	useEffect(() => {
		const mealArr =
			category === 'other'
				? meals.filter(
						meal =>
							meal.strCategory.toLocaleLowerCase().includes('goat') ||
							meal.strCategory.toLocaleLowerCase().includes('starter')
				  )
				: category === 'vegetarian'
				? meals.filter(meal =>
						meal.strCategory.toLocaleLowerCase().includes('veg')
				  )
				: meals.filter(meal => {
						return meal.strCategory
							.toLocaleLowerCase()
							.includes(category.toLocaleLowerCase());
				  });

		setImageIndex(Math.floor(Math.random() * mealArr.length));

		setCategoryArray(mealArr);
	}, [meals]);

	return (
		categoryArray[0] && (
			<li
				onClick={handleNavigate}
				key={categoryArray[0].id}>
				<div className='imgBox iz'>
					<img
						src={categoryArray[imageIndex].strMealThumb}
						alt={categoryArray[imageIndex].strMeal}
					/>
				</div>
				<p>{category}</p>
			</li>
		)
	);
};

export default CategoriesListItem;
