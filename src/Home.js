import React, { useEffect, useState } from 'react';
import Header from './home/Header';
import OnDisplay from './home/OnDisplay';
import Category from './home/Category';
import Region from './home/Region';
import SignUp from './home/SignUp';
import MissingPost from './MissingPost';

const Home = ({
	isLoading,
	fetchError,
	meals,
	setSearchHeading,
	setSearchData,
	categories,
	regions,
}) => {
	const [headerMeal, setHeaderMeal] = useState(null);
	const [homeCategory, setHomeCategory] = useState('');
	const [homeRegion, setHomeRegion] = useState('');

	useEffect(() => {
		const headerMealIndex = Math.floor(Math.random() * meals.length - 1);
		const homeCategoryIndex = Math.floor(Math.random() * categories.length);
		const homeRegionIndex = Math.floor(Math.random() * regions.length);

		setHomeRegion(regions[homeRegionIndex]);
		setHomeCategory(categories[homeCategoryIndex]);
		setHeaderMeal(meals[headerMealIndex]);
		setSearchHeading('search');
		setSearchData(meals);
	}, [meals.length > 1]);

	return (
		<main className='Home'>
			{isLoading && (
				<p
					style={{
						padding: '48px',
						color: 'rebeccapurple',
						textAlign: 'center',
					}}>
					Loading ...
				</p>
			)}
			{fetchError && !isLoading && (
				<p
					style={{
						padding: '48px',
						color: 'red',
						textAlign: 'center',
					}}>
					{fetchError}
				</p>
			)}
			{meals.length > 1 ? (
				!fetchError &&
				!isLoading && (
					<>
						<Header
							meals={meals}
							headerMeal={headerMeal}
							setSearchHeading={setSearchHeading}
							setSearchData={setSearchData}
						/>
						<OnDisplay
							onDisplay={homeCategory}
							meals={meals}
							filters='category'
							setSearchHeading={setSearchHeading}
							setSearchData={setSearchData}
						/>
						<OnDisplay
							onDisplay={homeRegion}
							meals={meals}
							filters='area'
							setSearchHeading={setSearchHeading}
							setSearchData={setSearchData}
						/>
						<Category
							categories={categories}
							meals={meals}
							setSearchHeading={setSearchHeading}
							setSearchData={setSearchData}
						/>
						<Region
							regions={regions}
							meals={meals}
							setSearchHeading={setSearchHeading}
							setSearchData={setSearchData}
						/>
						<SignUp />
					</>
				)
			) : (
				<MissingPost />
			)}
		</main>
	);
};

export default Home;
