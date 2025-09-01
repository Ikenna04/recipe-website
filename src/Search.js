import React, { useEffect, useState } from 'react';
import { IoClose } from 'react-icons/io5';
import SearchListItem from './SearchListItem';
import MissingPost from './MissingPost';
import { Link, useNavigate } from 'react-router-dom';
import { GrLinkPrevious } from 'react-icons/gr';

const Search = ({
	isLoading,
	fetchError,
	meals,
	searchHeading,
	searchData,
	setSearchHeading,
	setSearchData,
}) => {
	const [search, setSearch] = useState('');
	const [searchResults, setSearchResults] = useState([]);

	const navigate = useNavigate();

	useEffect(() => {
		if (!searchData[0]) {
			setSearchHeading('search');
			setSearchData(meals);
		}
	}, [meals]);

	useEffect(() => {
		setSearchResults(searchData);
	}, [searchData]);

	useEffect(() => {
		const filteredResults =
			searchData &&
			searchData.filter(
				data =>
					data.strMeal
						.toLocaleLowerCase()
						.includes(search.toLocaleLowerCase()) ||
					data.strCategory
						.toLocaleLowerCase()
						.includes(search.toLocaleLowerCase()) ||
					data.strArea.toLocaleLowerCase().includes(search.toLocaleLowerCase())
			);

		setSearchResults(filteredResults.reverse());
	}, [search]);

	return (
		<main className='Search'>
			<Link
				onClick={e => navigate(-1)}
				className='back btn'>
				<GrLinkPrevious />
				Back
			</Link>
			<h3>{searchHeading}</h3>
			<form action=''>
				<label htmlFor='search'>Search Meals</label>
				<input
					type='text'
					name='search'
					id='search'
					autoFocus
					value={search}
					onChange={e => setSearch(e.target.value)}
				/>
				<IoClose />
			</form>
			<>
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
				{searchResults ? (
					!fetchError &&
					!isLoading && (
						<ul>
							{searchResults.map(searchResult => (
								<SearchListItem searchResult={searchResult} />
							))}
						</ul>
					)
				) : (
					<MissingPost />
				)}
			</>
		</main>
	);
};

export default Search;
