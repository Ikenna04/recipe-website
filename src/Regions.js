import React from 'react';
import MissingPost from './MissingPost';
import RegionsListItem from './RegionsListItem';
import { Link, useNavigate } from 'react-router-dom';
import { GrLinkPrevious } from 'react-icons/gr';

const Regions = ({
	meals,
	isLoading,
	regions,
	fetchError,
	setSearchData,
	setSearchHeading,
}) => {
	const navigate = useNavigate();

	return (
		<main className='Regions'>
			<Link
				onClick={e => navigate(-1)}
				className='back btn'>
				<GrLinkPrevious />
				Back
			</Link>
			<h2>regions</h2>
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
			{meals ? (
				!fetchError &&
				!isLoading && (
					<ul>
						{regions.map(region => (
							<RegionsListItem
								meals={meals}
								region={region}
								setSearchHeading={setSearchHeading}
								setSearchData={setSearchData}
							/>
						))}
					</ul>
				)
			) : (
				<MissingPost />
			)}
		</main>
	);
};

export default Regions;
