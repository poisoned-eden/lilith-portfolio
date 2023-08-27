import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
// TODO replace this with my own logo
// import logo from '../logo.svg';
import Navigation from './Navigation';

export default function Header() {
	return (
		<header>
			<Navbar>
				<Navbar.Brand as='h1'>Lilith Miller-Fermor</Navbar.Brand>
				<Navigation />
			</Navbar>
		</header>
	);
}
