import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const StarRating = () => {
	const [rating, setRating] = useState(null);
	return (
		<div>
			<h1>Excellent</h1>
			{[...Array(5)].map((star, j) => {
				const ratingValue = j + 1;
				return (
					<babel>
						<input
							type='radio'
							name='rating'
							value={ratingValue}
							onClick={() => setRating(ratingValue)}
						/>
						<FaStar
							color={setRating < rating ? '#e4e5e9' : '#ffc107'}
							className='star-rating'
							size={50}
						/>
					</babel>
				);
			})}
		</div>
	);
};

export default StarRating;
