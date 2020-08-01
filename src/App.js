import React from 'react';
import './App.css';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import Dining from './components/Dining';
import Contact from './components/Contact';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';
import { Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';

import Navbar from './components/Navbar';

function App() {
	return (
		<>
			<Navbar />
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/rooms/' component={Rooms} />
				<Route exact path='/dining/' component={Dining} />
				<Route exact path='/contact/' component={Contact} />
				<Route exact path='/rooms/:slug' component={SingleRoom} />
				<Route component={Error} />
			</Switch>
			<Footer />
		</>
	);
}

export default App;
