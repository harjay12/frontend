import React from 'react';
import './Footer.css';
import { GrFacebook, GrInstagram } from 'react-icons/gr';
// GrFacebook

function Footer() {
	return (
		<div className='back-footer'>
			<div className='container'>
				<div className='row'>
					<div className='col-md-3 col-sm-6'>
						<h5 style={{ fontFamily: 'italic bold' }}>
							Fortunate Health Care Services
						</h5>
						<p tyle={{ fontFamily: 'italic' }}>617-314-4457</p>
						<p> 7 Laurel Woods Dr. Berlin NJ 08009</p>
					</div>

					<div className='col-md-3 col-sm-6'>
						<h5 style={{ fontFamily: 'italic bold' }}> Resources</h5>
						<ul className='list-unstyled'>
							<li>
								<a
									href='/About'
									style={{ color: 'rgb(231, 222, 222)', fontFamily: 'italic' }}>
									Who are we
								</a>
							</li>
							<li>
								<a
									href='/Services'
									style={{ color: 'rgb(231, 222, 222)', fontFamily: 'italic' }}>
									Our Teams
								</a>
							</li>
						</ul>
					</div>
					<div className='col-md-3 col-sm-6'>
						<h5 style={{ fontFamily: 'italic bold' }}>Social Media</h5>
						<ul className='list-unstyled'>
							<li>
								<a href='https://www.facebook.com/fortunateHHCS'>
									<GrFacebook style={{ color: 'rgb(231, 222, 222)' }} />
								</a>

								<a href='https://www.facebook.com/fortunateHHCS'>
									<GrInstagram
										style={{ color: 'rgb(231, 222, 222)', marginLeft: '10px' }}
									/>
								</a>
							</li>
						</ul>
					</div>
				</div>
				<hr color='#ababab' />
				<div className='footer-bottom'>
					<p
						style={{
							textAlign: 'center',
							marginBottom: '50px',
							marginTop: '-10px',
							fontFamily: 'italic',
						}}>
						Copyright &copy;{new Date().getFullYear()} Fortunate Health Care
						Services | All right reserved | <a href='/'>Terms Of Service</a> |
						<a href='/'> Privacy</a>
					</p>
				</div>
			</div>
		</div>
	);
}

export default Footer;
