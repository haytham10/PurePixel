import React, { useState } from 'react';

interface StarRatingProps {
	totalStars?: number;
	initialRating?: number;
	onRatingChange?: (rating: number) => void;
}

const StarRating: React.FC<StarRatingProps> = ({
	totalStars = 5,
	initialRating = 0,
	onRatingChange,
}) => {
	const [rating, setRating] = useState(initialRating);

	const handleClick = (ratingValue: number) => {
		setRating(ratingValue);
		if (onRatingChange) {
			onRatingChange(ratingValue);
		}
	};

	return (
		<div>
			{Array.from({ length: totalStars }, (_, index) => (
				<Star
					key={index}
					filled={index < rating}
					onClick={() => handleClick(index + 1)}
				/>
			))}
		</div>
	);
};

interface StarProps {
	filled: boolean;
	onClick: () => void;
}

const Star: React.FC<StarProps> = ({ filled, onClick }) => (
	<span onClick={onClick} style={{ cursor: 'pointer', color: filled ? 'gold' : 'gray' }}>
		★
	</span>
);

export default StarRating;