import React from 'react';
import Nav from 'react-bootstrap/Nav';

export default function Footer() {
	return (
		<footer className="fixed-bottom">
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
				{/* TODO linkedin 
				<Nav.Item>
					<Nav.Link href="" target="_blank">
						linkedin
					</Nav.Link>
				</Nav.Item> */}
				{/* TODO twitter profile 
				<Nav.Item>
					<Nav.Link href="" target="_blank">
						linkedin
					</Nav.Link>
				</Nav.Item> */}
			</Nav>
		</footer>
	);
}
