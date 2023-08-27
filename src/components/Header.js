import React from 'react';
// TODO replace this with my own logo
// import logo from '../logo.svg';
import Navigation from './Navigation';

export default function Header() {
	return (
		<header>
			<h1 className='pt-5 text-center' >
				Lilith Miller-Fermor
			</h1>
			<Navigation />
		</header>
	);
}
