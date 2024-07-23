'use client';

import React, { useEffect, useState } from 'react';

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

	const handleMouseEnter = (index) => {
		setHoveredIndex(index);
		setHoverHistory((prev) => [index, ...prev.slice(0, 3)]);
	};

	const getOpacity = (index) => {
		const historyIndex = hoverHistory.indexOf(index);
		if (historyIndex === -1) return 0;
		return (3 - historyIndex) * 0.15;
	};

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
						className='bg-transparent border border-orange-400 border-opacity-30 transition-colors duration-300 cursor-pointer'
						style={{ borderWidth: '1px' }}
						onMouseEnter={() => handleMouseEnter(i)}>
						<div
							className={`w-full h-full transition-all duration-300`}
							style={{
								backdropFilter:
									hoveredIndex === i
										? 'blur(8px)'
										: hoverHistory.includes(i)
										? 'blur(4px)'
										: 'none',
								backgroundColor: `rgba(253, 186, 116, ${
									hoveredIndex === i ? 0.5 : getOpacity(i)
								})`
							}}></div>
					</div>
				))}
			</div>
			{children}
		</div>
	);
};

export default DynamicGridBackground;
