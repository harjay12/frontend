import './NavbarPilot.css';
import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';

function NavbarPilot() {
	const [clicked, setClicked] = React.useState(true);
	const handleClick = () => {
		setClicked(!clicked);
		console.log('bottun cliecked');
	};

	return (
		<section className='navigation'>
			<div className='NavbarContainer'>
				<div className='NavbarWapper'>
					<div className='topinfo'>
						<h6 style={{ marginBottom: '-10px', marginTop: '10px' }}>
							Question?Call:
							<a href='#Question?Call'> 555-555-5555</a>
						</h6>
						<AiOutlineMenu className='topmenu' />

						<div
							className='empinfo'
							style={{ marginBottom: '-10px', marginTop: '10px' }}>
							<a href='#Employee'>Employee Information / Resources</a>
						</div>
					</div>
					<hr color='#ababab' />
					<div className='brand'>
						<a href='/'>
							<img className='img' src='/assets/logo1.png' alt='logo1'></img>
						</a>
					</div>
					<div className='container'>
						<nav className='nav'>
							<div onClick={handleClick}>
								<AiOutlineMenu className={clicked ? 'Aimenu' : 'close'} />
							</div>

							<ul className={clicked ? 'nav' : 'navOn'}>
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
					</div>
				</div>
			</div>
		</section>
	);
}

export default NavbarPilot;
