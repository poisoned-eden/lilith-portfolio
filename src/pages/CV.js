import React from 'react';
import { DownloadIcon } from '../components/Icons';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import cvPDF from '../assets/Lilith Miller-Fermor Full Stack Web Developer CV 6-10-23.pdf';
import ListGroup from 'react-bootstrap/ListGroup';

export default function CV() {
	return (
		<article>
			<h2 className="mb-4">Curriculum Vitae</h2>
			<Row xs={1} md={2}>
				<Col md={2} className='d-flex align-items-center'>
					<Button href={cvPDF} className="mb-3 download mx-auto">
						<DownloadIcon fill="white" />
						Download CV
					</Button>
				</Col>
				<Col md={10}>
					<p>
						Hit the button to download my full work CV. If you would
						like information that is more tailored to an employment
						opportunity you have, please contact me directly.
					</p>
					<p>Thank you for your interest!</p>
				</Col>
			</Row>
			<h3 className="mt-4">Skills</h3>
			<ListGroup>
				<Row>
					<Col>
						<ListGroup.Item>React</ListGroup.Item>
						<ListGroup.Item>Node.js</ListGroup.Item>
						<ListGroup.Item>Express.js</ListGroup.Item>
						<ListGroup.Item>Jest</ListGroup.Item>
						<ListGroup.Item>Git</ListGroup.Item>
						<ListGroup.Item>NoSQL</ListGroup.Item>
					</Col>
					<Col>
						<ListGroup.Item>SQL</ListGroup.Item>
						<ListGroup.Item>JS</ListGroup.Item>
						<ListGroup.Item>HTML & CSS</ListGroup.Item>
						<ListGroup.Item>PHP</ListGroup.Item>
						<ListGroup.Item>Python</ListGroup.Item>
					</Col>
				</Row>
			</ListGroup>
		</article>
	);
}
