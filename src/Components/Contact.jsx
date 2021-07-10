import './Contact.css';
import React from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import Mapboxdirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';
import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css';
import { Col, Row } from 'react-bootstrap';
import axios from 'axios';

export default function Home() {
	mapboxgl.accessToken = process.env.REACT_APP_MAPBOXGL;
	const [sent, setSent] = React.useState('');
	const [status, setStatus] = React.useState('Submit');
	const mapContainer = React.useRef(null);
	const map = React.useRef(null);
	const [lng, setLng] = React.useState(-70.9);
	const [lat, setLat] = React.useState(42.35);
	const [zoom, setZoom] = React.useState(9);

	const handleSubmit = (e) => {
		e.preventDefault();
		setStatus(<div className='appendMovingDots'>Sending</div>);
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
			center: [lng, lat],
			zoom: zoom,
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
	React.useEffect(() => {
		if (!map.current) return; // wait for map to initialize
		map.current.on('move', () => {
			setLng(map.current.getCenter().lng.toFixed(4));
			setLat(map.current.getCenter().lat.toFixed(4));
			setZoom(map.current.getZoom().toFixed(2));
		});
	});

	return (
		<div>
			<div ref={mapContainer} className='map-l'>
				<div className='sidebar'>
					Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
				</div>
			</div>
			<div>
				<Row>
					<Col>
						<div style={{ margin: '50px' }}>
							<h1>CONTACT INFO </h1>
							<br />
							<h6>7 Laurel Woods Dr. Berlin NJ 08009</h6>
							Phone Number: 218-573-2238 <br />
						</div>
					</Col>
					<Col>
						<div className='formWapper'>
							{sent}
							<form onSubmit={handleSubmit}>
								<label className='style'>
									Full name <span class='required-field'></span>
								</label>
								<input
									id='name'
									required
									type='text'
									placeholder='Your full name'
								/>
								<label>Email</label>
								<input
									id='email'
									required
									type='email'
									placeholder='Your email'
								/>
								<label>Subject</label>
								<input id='subject' type='text' placeholder='Optional' />
								<label>Message</label>
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
					</Col>
				</Row>
			</div>
		</div>
	);
}
