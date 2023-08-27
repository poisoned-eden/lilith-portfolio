import React from 'react';
import Navbar from 'react-bootstrap/Navbar';


export default function Navigation({ currentPage, handlePageChange }) {
	return (
		<ul className="nav nav-tabs">
			<li className="nav-item">
				<a
					href="#aboutMe"
					onClick={() => handlePageChange('AboutMe')}
					className={
						currentPage === 'AboutMe'
							? 'nav-link active'
							: 'nav-link'
					}
				>
					About Me
				</a>
			</li>
			<li className="nav-item">
				<a
					href="#portfolio"
					onClick={() => handlePageChange('Portfolio')}
					className={
						currentPage === 'Portfolio'
							? 'nav-link active'
							: 'nav-link'
					}
				>
					Portfolio
				</a>
			</li>
			<li className="nav-item">
				<a
					href="#contact"
					onClick={() => handlePageChange('Contact')}
					className={
						currentPage === 'Contact'
							? 'nav-link active'
							: 'nav-link'
					}
				>
					Contact
				</a>
			</li>
			<li className="nav-item">
				<a
					href="#cv"
					onClick={() => handlePageChange('CV')}
					className={
						currentPage === 'CV' ? 'nav-link active' : 'nav-link'
					}
				>
					CV
				</a>
			</li>
		</ul>
	);
}
