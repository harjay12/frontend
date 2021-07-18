import './NavbarPilot.css';
import React from 'react';
import { BsList, BsXCircle } from 'react-icons/bs';
// import { AiOutlineMenu } from 'react-icons/ai';
import { Row, Col } from 'react-bootstrap';

function NavbarPilot() {
	const [clicked, setClicked] = React.useState(false);
	const [topMenu, setTopMenu] = React.useState(true);
	const handleClick = () => {
		setClicked(!clicked);
	};
	const handleTopMenu = () => {
		setTopMenu(!topMenu);
		console.log('bottun cliecked is :', topMenu);
	};

	console.log('bottun cliecked is :', clicked);

	return (
		<section className='navigation'>
			<div className='NavbarContainer'>
				<div className='NavbarWapper'>
					<div className='topinfo'>
						<h6 style={{ marginBottom: '-10px', marginTop: '10px' }}>
							Question?Call:
							<a href='#Question?Call'> 555-555-5555</a>
						</h6>
						<BsList
							onClick={handleTopMenu}
							className={topMenu ? ' topmenu' : 'topmenuOff'}
						/>

						<div
							className='empinfo'
							style={{ marginBottom: '-10px', marginTop: '10px' }}>
							<a href='#Employee'>Employee Information / Resources</a>
						</div>
					</div>
					<hr color='#ababab' />
					<Row>
						<Col>
							<div className='brand'>
								<a href='/'>
									<img
										className='img'
										src='/assets/logo1.png'
										alt='logo1'></img>
								</a>
							</div>
						</Col>

						<Col>
							<nav className='nav'>
								<div onClick={handleClick}>
									<BsList className={clicked ? ' barmenuOff' : 'barmenu'} />
								</div>
								{/*
							className={clicked ? 'barmenuOff' : 'navOn'}
							
							*/}

								<ul className={clicked ? 'navOn' : 'barmenuOff'}>
									<BsXCircle className='xicon' onClick={handleClick} />

									<li className='nav-item'>
										<a className='nav-link active' href='/'>
											Home
										</a>
									</li>
									<li className='nav-item'>
										<a className='nav-link active' href='/Services'>
											Our Services
										</a>
									</li>
									<li className='nav-item'>
										<a className='nav-link active' href='/About'>
											About Us
										</a>
									</li>
									<li className='nav-item'>
										<a className='nav-link active' href='/Careers'>
											Career Opportunities
										</a>
									</li>
									<li className='nav-item'>
										<a className='nav-link active' href='/Contact'>
											Contact Us
										</a>
									</li>
								</ul>
							</nav>
						</Col>
					</Row>
				</div>
			</div>
		</section>
	);
}

export default NavbarPilot;
