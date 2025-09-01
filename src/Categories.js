import MissingPost from './MissingPost';
import CategoriesListItem from './CategoriesListItem';
import { Link, useNavigate } from 'react-router-dom';
import { GrLinkPrevious } from 'react-icons/gr';

const Categories = ({
	meals,
	categories,
	isLoading,
	fetchError,
	setSearchData,
	setSearchHeading,
}) => {
	const navigate = useNavigate();

	return (
		<main className='Categories'>
			<Link
				onClick={e => navigate(-1)}
				className='back btn'>
				<GrLinkPrevious />
				Back
			</Link>
			<h2>categories</h2>
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
						{categories.map(category => (
							<CategoriesListItem
								meals={meals}
								category={category}
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

export default Categories;
