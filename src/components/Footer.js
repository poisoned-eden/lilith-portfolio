import React from 'react';
import MyGithub from './MyGithub';
import Nav from 'react-bootstrap/Nav';

export default function Footer() {
	return (
		<footer>
			<Nav className="justify-content-center">
				<Nav.Item>
					<Nav.Link href="" target="_blank" disabled>
						&copy; Lilith Miller-Fermor 2023.
					</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link
						href="https://github.com/poisoned-eden"
						target="_blank"
					>
						github
					</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link href="" target="_blank">
						linkedin
					</Nav.Link>
				</Nav.Item>
			</Nav>
		</footer>
	);
}
