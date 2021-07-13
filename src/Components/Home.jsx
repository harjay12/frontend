import React, { useState, useEffect, useRef } from 'react';
import './Home.css';
import { FcPrevious, FcNext } from 'react-icons/fc';

function Home() {
	const imagesData = [
		`url("/assets/image4.jpg")`,
		`url("/assets/image2.jpg")`,
		`url("/assets/image8.jpg")`,
		`url("/assets/image6.jpg")`,
	];
	const delay = 5500;
	const [current, setCurrent] = useState(0);
	const timeoutRef = useRef(null);

	function resetTimeout() {
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
		}
	}

	useEffect(() => {
		resetTimeout();
		timeoutRef.current = setTimeout(
			() =>
				setCurrent((prevIndex) =>
					prevIndex === imagesData.length - 1 ? 0 : prevIndex + 1
				),
			delay
		);

		return () => {
			resetTimeout();
		};
	});
	const nextSlide = () => {
		setCurrent(current === imagesData.length - 1 ? 0 : current + 1);
	};
	const prevSlide = () => {
		setCurrent(current === 0 ? imagesData.length - 1 : current - 1);
	};
	return (
		<div className='slideshow'>
			<FcNext className='right-arrow' onClick={nextSlide} />

			<FcPrevious className='left-arrow' onClick={prevSlide} />
			<div
				className='slideshowSlider'
				style={{
					transform: `translate3d(${-current * 100}%, 0, 0)`,
				}}>
				{imagesData.map((backgroundImage, index) => (
					<div
						className='slidert'
						key={index}
						style={{ backgroundImage }}></div>
				))}
			</div>
			<div className='slideshowDots'>
				{imagesData.map((_, idx) => (
					<div
						key={idx}
						className={`slideshowDot${current === idx ? ' active' : ''}`}
						onClick={() => {
							setCurrent(idx);
						}}></div>
				))}
			</div>
		</div>
	);
}

export default Home;
