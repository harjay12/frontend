import './Contact.css';
import React from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import Mapboxdirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';
import axios from 'axios';

export default function Home() {
	mapboxgl.accessToken = process.env.REACT_APP_MAPBOXGL;
	const [sent, setSent] = React.useState('');
	const [status, setStatus] = React.useState('Submit');
	const mapContainer = React.useRef(null);
	const map = React.useRef(null);

	const handleSubmit = (e) => {
		e.preventDefault();
		setStatus(<div className='loading'>Sending</div>);
		const { name, email, subject, message } = e.target.elements;
		const data = {
			name: name.value,
			email: email.value,
			subject: subject.value,
			message: message.value,
		};
		axios
			.post('/api/forma', data)
			.then((res) => {
				setSent(
					<div className='sentmsg1'>Your message was succefully sent.</div>
				);
				resetForm(name, email, message, subject);
			})
			.catch((err) => {
				setStatus('Submit');
				setSent(<div className='sentmsg2'>Your message was not sent.</div>);
				resetForm(name, email, message, subject);
				console.log('message not sent because of: ', err.message);
			});
	};
	const resetForm = (name, email, subject, message) => {
		setTimeout(() => {
			name.value = '';
			email.value = '';
			subject.value = '';
			message.value = '';
			setSent('');
			setStatus('Submit');
		}, 3000);
	};

	React.useEffect(() => {
		if (map.current) return; // initialize map only once
		map.current = new mapboxgl.Map({
			container: mapContainer.current,
			style: 'mapbox://styles/mapbox/streets-v11',
			center: [-70.9, 42.35],
			zoom: 9,
		});
		map.current.scrollZoom.disable();
		map.current.addControl(
			new Mapboxdirections({
				accessToken: mapboxgl.accessToken,
				mapboxgl: mapboxgl,
			}),
			'bottom-right'
		);
		map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

		// clean up on unmount
		return () => map.current.remove();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div>
			<div ref={mapContainer} className='map-l'></div>
			<div className='container colRow'>
				<div className='info'>
					<h1>CONTACT INFO </h1>

					<h4>Address </h4>
					<h6>7 Laurel Woods Dr. Berlin NJ 08009</h6>

					<h4>Phone Number:</h4>
					<h6>218-573-2238 </h6>

					<h4>Email:</h4>
					<a href='mailto: fortunate@fortunatehhcs.com'>
						fortunate@fortunatehhcs.com
					</a>

					<h4>Social Media:</h4>
					<a href='https://www.facebook.com/fortunateHHCS '>
						https://www.facebook.com/fortunateHHCS
					</a>
				</div>

				<div className='formCont'>
					<form onSubmit={handleSubmit}>
						<h1>CONTACT Us </h1>
						<div
							style={{
								position: 'absolute',
								marginBottom: '10px',
								marginLeft: '120px',
							}}>
							{sent}
						</div>

						<label className='style' style={{ marginTop: '15px' }}>
							Full name <span class='required-field'></span>
						</label>
						<input
							id='name'
							required
							type='text'
							placeholder='Your full name'
						/>
						<label className='style'>Email</label>
						<input id='email' required type='email' placeholder='Your email' />
						<label className='style'>Subject</label>
						<input id='subject' type='text' placeholder='Optional' />
						<label className='style'>Message</label>
						<textarea
							id='message'
							type='text'
							required
							placeholder="what's on you mind"
						/>
						<label />
						<button type='submit' className='btn'>
							{status}
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}
