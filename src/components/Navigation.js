import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap';
import NavbarBrand from 'react-bootstrap/esm/NavbarBrand';

export default function Navigation({ currentPage, handlePageChange }) {
	return (
		<Nav>
			<LinkContainer to="/">
				<Nav.Link>About Me</Nav.Link>
			</LinkContainer>
			<LinkContainer to="/portfolio">
				<Nav.Link>Portfolio</Nav.Link>
			</LinkContainer>
			<LinkContainer to="/cv">
				<Nav.Link>CV</Nav.Link>
			</LinkContainer>
			<LinkContainer to="/contact">
				<Nav.Link>Contact</Nav.Link>
			</LinkContainer>
		</Nav>

		// <ul className="nav nav-tabs">
		// 	<li className="nav-item">
		// 		<a
		// 			href="#aboutMe"
		// 			onClick={() => handlePageChange('AboutMe')}
		// 			className={
		// 				currentPage === 'AboutMe'
		// 					? 'nav-link active'
		// 					: 'nav-link'
		// 			}
		// 		>
		// 			About Me
		// 		</a>
		// 	</li>
		// 	<li className="nav-item">
		// 		<a
		// 			href="#portfolio"
		// 			onClick={() => handlePageChange('Portfolio')}
		// 			className={
		// 				currentPage === 'Portfolio'
		// 					? 'nav-link active'
		// 					: 'nav-link'
		// 			}
		// 		>
		// 			Portfolio
		// 		</a>
		// 	</li>
		// 	<li className="nav-item">
		// 		<a
		// 			href="#contact"
		// 			onClick={() => handlePageChange('Contact')}
		// 			className={
		// 				currentPage === 'Contact'
		// 					? 'nav-link active'
		// 					: 'nav-link'
		// 			}
		// 		>
		// 			Contact
		// 		</a>
		// 	</li>
		// 	<li className="nav-item">
		// 		<a
		// 			href="#cv"
		// 			onClick={() => handlePageChange('CV')}
		// 			className={
		// 				currentPage === 'CV' ? 'nav-link active' : 'nav-link'
		// 			}
		// 		>
		// 			CV
		// 		</a>
		// 	</li>
		// </ul>
	);
}
