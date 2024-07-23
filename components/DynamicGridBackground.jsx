'use client';

import React, { useEffect, useState, useCallback } from 'react';

export const DynamicGridBackground = ({ children }) => {
	const [gridSize, setGridSize] = useState({ cols: 0, rows: 0 });
	const [hoveredIndex, setHoveredIndex] = useState(null);
	const [hoverHistory, setHoverHistory] = useState([]);

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

	const handleMouseEnter = useCallback((index) => {
		setHoveredIndex(index);
		setHoverHistory((prev) => [
			{ index, timestamp: Date.now() },
			...prev.slice(0, 2)
		]);
	}, []);

	const getOpacity = useCallback(
		(index) => {
			if (index === hoveredIndex) return 0.5;
			const historyItem = hoverHistory.find((item) => item.index === index);
			if (!historyItem) return 0;
			const timePassed = Date.now() - historyItem.timestamp;
			const maxDuration = 1000; // 1 second fade out
			return Math.max(0, 0.3 * (1 - timePassed / maxDuration));
		},
		[hoveredIndex, hoverHistory]
	);

	useEffect(() => {
		const interval = setInterval(() => {
			setHoverHistory((prev) =>
				prev.filter((item) => Date.now() - item.timestamp < 1000)
			);
		}, 100);
		return () => clearInterval(interval);
	}, []);

	return (
		<div className='relative w-screen min-h-screen bg-gradient-to-r from-orange-500 to-orange-700 overflow-hidden'>
			<div
				className='absolute inset-0 grid z-10'
				style={{
					gridTemplateColumns: `repeat(${gridSize.cols}, 1fr)`,
					gridAutoRows: '80px'
				}}>
				{[...Array(totalSquares)].map((_, i) => (
					<div
						key={i}
						className='bg-transparent border border-orange-400 border-opacity-30 cursor-pointer'
						style={{ borderWidth: '1px' }}
						onMouseEnter={() => handleMouseEnter(i)}>
						<div
							className='w-full h-full transition-all duration-300'
							style={{
								backdropFilter: `blur(${i === hoveredIndex ? 8 : 4}px)`,
								backgroundColor: `rgba(253, 186, 116, ${getOpacity(i)})`,
								transition: 'background-color 0.3s, backdrop-filter 0.3s'
							}}></div>
					</div>
				))}
			</div>
			{children}
		</div>
	);
};

export default DynamicGridBackground;
