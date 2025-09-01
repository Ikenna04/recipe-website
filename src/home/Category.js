import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { GrFormNextLink } from 'react-icons/gr';
import CategoryListItem from './CategoryListItem';

const Category = ({ categories, meals, setSearchHeading, setSearchData }) => {
	const [topCategories, setTopCategories] = useState([]);

	useEffect(() => {
		const categoriesSubArr = categories.slice(0, 6);
		setTopCategories(categoriesSubArr);
	}, [meals]);

	return (
		topCategories[0] && (
			<section className='HomeCategory'>
				<div className='subHead'>
					<h3>popular categories</h3>
					<Link
						to='/category'
						className='btn cp'>
						<GrFormNextLink />
					</Link>
				</div>
				<ul className='HomeCategoryGrid'>
					{topCategories.map((topCategory, index) => {
						return (
							<CategoryListItem
								meals={meals}
								index={index}
								topCategory={topCategory}
								setSearchHeading={setSearchHeading}
								setSearchData={setSearchData}
							/>
						);
					})}
				</ul>
			</section>
		)
	);
};

export default Category;
