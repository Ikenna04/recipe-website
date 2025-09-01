import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegionListItem = ({
	meals,
	index,
	topRegion,
	setSearchHeading,
	setSearchData,
}) => {
	const [regionArray, setRegionArray] = useState('');
	const [imageIndex, setImageIndex] = useState('');
	const navigate = useNavigate();

	const handleNavigate = () => {
		setSearchHeading(topRegion);
		setSearchData(regionArray);

		navigate(`/search/`);
	};

	useEffect(() => {
		const mealArr =
			topRegion === 'others'
				? meals.filter(
						meal =>
							meal.strArea.toLocaleLowerCase() !== 'british' &&
							meal.strArea.toLocaleLowerCase() !== 'american' &&
							meal.strArea.toLocaleLowerCase() !== 'french' &&
							meal.strArea.toLocaleLowerCase() !== 'italian' &&
							meal.strArea.toLocaleLowerCase() !== 'canadian' &&
							meal.strArea.toLocaleLowerCase() !== 'chinese' &&
							meal.strArea.toLocaleLowerCase() !== 'indian' &&
							meal.strArea.toLocaleLowerCase() !== 'japanese' &&
							meal.strArea.toLocaleLowerCase() !== 'jamaican' &&
							meal.strArea.toLocaleLowerCase() !== 'polish' &&
							meal.strArea.toLocaleLowerCase() !== 'irish' &&
							meal.strArea.toLocaleLowerCase() !== 'portuguese' &&
							meal.strArea.toLocaleLowerCase() !== 'croatian' &&
							meal.strArea.toLocaleLowerCase() !== 'filipino' &&
							meal.strArea.toLocaleLowerCase() !== 'tunisian' &&
							meal.strArea.toLocaleLowerCase() !== 'greek' &&
							meal.strArea.toLocaleLowerCase() !== 'egyptian' &&
							meal.strArea.toLocaleLowerCase() !== 'malaysian' &&
							meal.strArea.toLocaleLowerCase() !== 'russian' &&
							meal.strArea.toLocaleLowerCase() !== 'mexican' &&
							meal.strArea.toLocaleLowerCase() !== 'moroccan'
				  )
				: meals.filter(
						meal =>
							meal.strArea.toLocaleLowerCase() === topRegion.toLocaleLowerCase()
				  );

		setImageIndex(Math.floor(Math.random() * mealArr.length));

		setRegionArray(mealArr);
	}, [meals]);

	return (
		regionArray[0] && (
			<li
				onClick={handleNavigate}
				key={index}>
				<div className='iz RegionImg'>
					<img
						src={regionArray[imageIndex].strMealThumb}
						alt={regionArray[imageIndex].strMeal}
					/>
				</div>
				<div className='foodName'>
					<p>{topRegion}</p>
				</div>
			</li>
		)
	);
};

export default RegionListItem;
