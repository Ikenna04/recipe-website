import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { GrFormNextLink } from 'react-icons/gr';
import RegionListItem from './RegionListItem';

const Region = ({ regions, meals, setSearchHeading, setSearchData }) => {
	const [topRegions, setTopRegions] = useState([]);

	useEffect(() => {
		const regionsSubArr = regions.slice(0, 6);
		setTopRegions(regionsSubArr);
	}, [meals]);

	return (
		topRegions[0] && (
			<section className='HomeRegion'>
				<div className='subHead'>
					<h3>popular regions</h3>
					<Link
						to='/region'
						className='btn cp'>
						<GrFormNextLink />
					</Link>
				</div>
				<ul className='HomeRegionGrid'>
					{topRegions.map((topRegion, index) => {
						return (
							<RegionListItem
								meals={meals}
								index={index}
								topRegion={topRegion}
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

export default Region;
