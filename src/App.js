import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/Services';
import Contact from './Components/Contact';
import Careers from './Components/Careers';
import NavbarPilot from './Components/NavbarPilot';
import Footer from './Components/Footer';

function App() {
	return (
		<div>
			<Footer />

			<div>
				<div className='text'>
					<NavbarPilot />
				</div>
				<Router>
					{/* <NavbarSys /> */}
					<Switch>
						<Route exact path='/'>
							<Home />
						</Route>
						<Route path='/About'>
							<About />
						</Route>
						<Route path='/Services'>
							<Services />
						</Route>
						<Route path='/Contact'>
							<Contact />
						</Route>
						<Route path='/Careers'>
							<Careers />
						</Route>
					</Switch>
				</Router>
			</div>
			{/* <Footer /> */}
		</div>
	);
}

export default App;
