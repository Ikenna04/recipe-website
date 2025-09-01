import React from 'react';

const IngredientList = ({ ingredient, index }) => {
	return (
		<div className='ingredient'>
			<input
				type='checkbox'
				name={`ingredient${index}`}
				id={`ingredient${index}`}
			/>
			<label htmlFor={`ingredient${index}`}>{ingredient}</label>
		</div>
	);
};

export default IngredientList;
