import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegionsListItem = ({
	meals,
	region,
	setSearchHeading,
	setSearchData,
}) => {
	const [regionArray, setRegionArray] = useState('');
	const [imageIndex, setImageIndex] = useState('');
	const navigate = useNavigate();

	const handleNavigate = () => {
		setSearchHeading(region);
		setSearchData(regionArray);

		navigate(`/search/`);
	};

	useEffect(() => {
		const mealArr =
			region === 'others'
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
							.includes(region.toLocaleLowerCase())
				  );

		setImageIndex(Math.floor(Math.random() * mealArr.length));

		setRegionArray(mealArr);
	}, [meals]);

	return (
		regionArray[0] && (
			<li
				onClick={handleNavigate}
				key={regionArray[0].id}>
				<div className='imgBox iz'>
					<img
						src={regionArray[imageIndex].strMealThumb}
						alt={regionArray[imageIndex].strMeal}
					/>
				</div>
				<p>{region}</p>
			</li>
		)
	);
};

export default RegionsListItem;
