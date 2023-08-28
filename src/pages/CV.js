import React from 'react';
// import downloadSVG from '../assets/icons/download.svg';
import hourglassSVG from '../assets/icons/hourglass-split.svg';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function CV() {
	return (
		<article>
			<h2 className='mb-4'>Curriculum Vitae</h2>
			<p>
				My CV will be available soon. Please contact me if you'd like it
				sent your way as soon as it's ready.
			</p>
			<p>Thank you for your interest!</p>
			<Row>
				<Col xs={{ span: 4, offset: 4}} className='d-flex align-items-center'>
					
					<Image src={hourglassSVG} fluid className='w-100'/>
					
				</Col>
			</Row>

		</article>
	);
}
