import React from 'react';
import { DownloadIcon } from '../components/Icons';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import cvPDF from '../assets/Lilith_Miller-Fermor_-_CV.pdf';

export default function CV() {
	return (
		<article>
			<h2 className='mb-4'>Curriculum Vitae</h2>
			<Row>
				<Col xs={2} className=''>
					<Button href={cvPDF} className='download'>
						<DownloadIcon className='w-100' fill='white' />
						Download CV
					</Button>
				</Col>
				<Col>
					<p>
						Hit the button to download my full work CV.  If you would like information that is more tailored to an employment opportunity you have, please contact me directly.
					</p>
					<p>Thank you for your interest!</p>
				</Col>
			</Row>
			{/* TODO list of my proficiencies */}

		</article>
	);
}
