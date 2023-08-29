import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import CV from './pages/CV';
import { Routes, Route } from 'react-router-dom';

function App() {
	// TODO use State to set light and dark mode

	return (
		<Container>
			<Header />
			<main className='mb-5'>
				<Routes>
					<Route path='./' element={<AboutMe />} />
					<Route path='./portfolio' element={<Portfolio />} />
					<Route path='./cv' element={<CV />} />
					<Route path='./contact' element={<Contact />} />
				</Routes>
			</main>
			<Footer />
		</Container>
	);
}

export default App;
