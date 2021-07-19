import React from 'react';
import './Home.css';
import { FcPrevious, FcNext } from 'react-icons/fc';

export default function Home() {
	const [current, setCurrent] = React.useState(0);

	const images = [
		'/assets/image4.jpg',
		'/assets/image2.jpg',
		'/assets/image8.jpg',
		'/assets/image6.jpg',
	];

	const goBack = () => {
		current >= images.length - 1 ? setCurrent(0) : setCurrent(current + 1);
	};

	const goForward = () => {
		current === 0 ? setCurrent(images.length - 1) : setCurrent(current - 1);
		console.log('Helloe');
	};
	const delay = 5500;

	const timeoutRef = React.useRef(null);

	function resetTimeout() {
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
		}
	}

	React.useEffect(() => {
		resetTimeout();
		timeoutRef.current = setTimeout(
			() =>
				setCurrent((prevIndex) =>
					prevIndex === images.length - 1 ? 0 : prevIndex + 1
				),
			delay
		);

		return () => {
			resetTimeout();
		};
	});

	return (
		<div className='containerI'>
			<div className='topwapper'>
				<div className='h1Style'>
					<br />
					<p>
						Your is our number one priority, your friendly confident care
						provider
					</p>
					<br />
					<button className='bnt'>Schedule an Appoinment!</button>
				</div>

				<div
					className='imageContainer'
					style={{
						backgroundImage: `url(${images[current]})`,
					}}>
					<div className='controls '>
						<FcPrevious onClick={goBack} className='controls__button' />

						<FcNext onClick={goForward} className='controls__button' />
					</div>
				</div>
			</div>
		</div>
	);
}

// function Home() {
// 	const imagesData = [
// 		'/assets/image4.jpg',
// 		'/assets/image2.jpg',
// 		'/assets/image8.jpg',
// 		'/assets/image6.jpg',
// 	];
// 	const delay = 5500;
// 	const [current, setCurrent] = useState(0);
// 	const timeoutRef = useRef(null);
// 	const nextSlide = () => {
// 		current === 0 ? setCurrent(imagesData.length - 1) : setCurrent(current - 1);
// 	};
// 	const prevSlide = () => {
// 		current >= imagesData.length - 1 ? setCurrent(0) : setCurrent(current + 1);
// 	};

// 	function resetTimeout() {
// 		if (timeoutRef.current) {
// 			clearTimeout(timeoutRef.current);
// 		}
// 	}

// 	useEffect(() => {
// 		resetTimeout();
// 		timeoutRef.current = setTimeout(
// 			() =>
// 				setCurrent((prevIndex) =>
// 					prevIndex === imagesData.length - 1 ? 0 : prevIndex + 1
// 				),
// 			delay
// 		);

// 		return () => {
// 			resetTimeout();
// 		};
// 	});

// 	return (
// 		<div className='container'>
// 			<div
// 				className='imageContainer'
// 				style={{
// 					backgroundImage: `url(${imagesData[current]})`,
// 				}}>
// 				<div className='controls'>
// 					<button className='buttons' onClick={nextSlide}>
// 						<FcPrevious />
// 					</button>
// 					<button className='buttons' onClick={prevSlide}>
// 						<FcNext />
// 					</button>
// 				</div>
// 			</div>
// 		</div>
// <div className='slideshow '>
// 	<FcNext className='right-arrow' onClick={nextSlide} />

// 	<FcPrevious className='left-arrow' onClick={prevSlide} />
// 	<div
// 		className='slideshowSlider'
// 		style={{
// 			transform: `translate3d(${-current * 100}%, 0, 0)`,
// 		}}>
// 		{imagesData.map((backgroundImage, index) => (
// 			<div
// 				className='slidert'
// 				key={index}
// 				style={{ backgroundImage }}></div>
// 		))}
// 	</div>
// 	<div className='slideshowDots '>
// 		{imagesData.map((_, idx) => (
// 			<div
// 				key={idx}
// 				className={`slideshowDot${current === idx ? ' active' : ''}`}
// 				onClick={() => {
// 					setCurrent(idx);
// 				}}></div>
// 		))}
// 	</div>
// </div>
// 	);
// }

// export default Home;
