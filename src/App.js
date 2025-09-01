import { Route, Routes } from 'react-router-dom';
import './App.css';
import { useEffect, useState } from 'react';
import Header from './Header';
import Home from './Home';
import Footer from './Footer';
import Search from './Search';
import Favorites from './Favorites';
import Categories from './Categories';
import Regions from './Regions';
import Missing from './Missing';
import Recipe from './Recipe';
import useAxiosFetch from './hooks/useAxiosFetch';

function App() {
	const [meals, setMeals] = useState([]);
	const [searchHeading, setSearchHeading] = useState('search');
	const [searchData, setSearchData] = useState([]);
	const { data, fetchError, isLoading } = useAxiosFetch(
		'http://localhost:3300/meals'
	);

	const categories = [
		'dessert',
		'beef',
		'vegetarian',
		'chicken',
		'seafood',
		'pork',
		'side',
		'lamb',
		'miscellaneous',
		'pasta',
		'breakfast',
		'other',
	];

	const regions = [
		'british',
		'american',
		'french',
		'italian',
		'canadian',
		'chinese',
		'indian',
		'japanese',
		'jamaican',
		'polish',
		'irish',
		'portuguese',
		'croatian',
		'filipino',
		'tunisian',
		'greek',
		'egyptian',
		'malaysian',
		'russian',
		'mexican',
		'moroccan',
		'others',
	];

	useEffect(() => {
		setMeals(data);
	}, [data]);

	return (
		<div className='App'>
			<Header />
			<Routes>
				<Route
					index
					element={
						<Home
							isLoading={isLoading}
							fetchError={fetchError}
							meals={meals}
							setSearchHeading={setSearchHeading}
							setSearchData={setSearchData}
							categories={categories}
							regions={regions}
						/>
					}
				/>
				<Route
					path='/search'
					element={
						<Search
							isLoading={isLoading}
							fetchError={fetchError}
							meals={meals}
							searchHeading={searchHeading}
							searchData={searchData}
							setSearchHeading={setSearchHeading}
							setSearchData={setSearchData}
						/>
					}
				/>
				<Route
					path='/recipe/:id'
					element={
						<Recipe
							meals={meals}
							setMeals={setMeals}
							setSearchHeading={setSearchHeading}
							setSearchData={setSearchData}
						/>
					}
				/>
				<Route
					path='/favorite'
					element={
						<Favorites
							meals={meals}
							isLoading={isLoading}
							fetchError={fetchError}
						/>
					}
				/>
				<Route
					path='/category'
					element={
						<Categories
							meals={meals}
							categories={categories}
							isLoading={isLoading}
							fetchError={fetchError}
							setSearchHeading={setSearchHeading}
							setSearchData={setSearchData}
						/>
					}
				/>
				<Route
					path='/region'
					element={
						<Regions
							meals={meals}
							regions={regions}
							isLoading={isLoading}
							fetchError={fetchError}
							setSearchHeading={setSearchHeading}
							setSearchData={setSearchData}
						/>
					}
				/>
				<Route
					path='*'
					element={<Missing />}
				/>
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
