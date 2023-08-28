import React from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import githubLogo from '../assets/icons/github.svg';
import arrowRightCircle from '../assets/icons/arrow-right-circle.svg';

export default function Project({
	id,
	display,
	featured,
	title,
	repoLink,
	deployedLink,
	screenshot,
	alt,
	description,
}) {
	return (
		<>
			{featured && 
				<Col>
					<Card className="" key={id}>
						<Card.Body>
							<Card.Title>{title}</Card.Title>
							<Card.Text>{description}</Card.Text>
							<ListGroup>
									<ListGroup.Item href={repoLink} target="_blank" action variant='light' className='d-flex justify-content-between'>
										GitHub repository
										<img src={githubLogo} alt="GitHub" className='' aria-hidden="true"></img>
									</ListGroup.Item>
									{deployedLink && (
										<ListGroup.Item href={deployedLink} target="_blank" action variant='light' className='d-flex justify-content-between'>
											Deployed project
											<img src={arrowRightCircle} alt="Arrow" className='' aria-hidden="true"></img>
										</ListGroup.Item>
									)}
							</ListGroup>
						</Card.Body>
						<Card.Img src={screenshot} alt={alt} variant="bottom" />
					</Card>
				</Col>
			}
		</>
	);
}
