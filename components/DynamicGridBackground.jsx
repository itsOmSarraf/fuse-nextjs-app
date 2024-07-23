'use client';

import React, { useEffect, useState } from 'react';

export const DynamicGridBackground = ({ children }) => {
	const [gridSize, setGridSize] = useState({ cols: 0, rows: 0 });

	useEffect(() => {
		const updateGridSize = () => {
			const squareSize = 80;
			const cols = Math.ceil(window.innerWidth / squareSize);
			const rows = Math.ceil(window.innerHeight / squareSize);
			setGridSize({ cols, rows });
		};

		updateGridSize();
		window.addEventListener('resize', updateGridSize);

		return () => window.removeEventListener('resize', updateGridSize);
	}, []);

	const totalSquares = gridSize.cols * gridSize.rows;

	return (
		<div className='relative w-screen min-h-screen bg-gradient-to-r from-orange-500 to-orange-700 overflow-hidden'>
			<div
				className='absolute inset-0 grid'
				style={{
					gridTemplateColumns: `repeat(${gridSize.cols}, 1fr)`,
					gridAutoRows: '80px'
				}}>
				{[...Array(totalSquares)].map((_, i) => (
					<div
						key={i}
						className='bg-transparent border border-orange-400 border-opacity-30'
						style={{ borderWidth: '1px' }}></div>
				))}
			</div>
			{children}
		</div>
	);
};

export default DynamicGridBackground;
