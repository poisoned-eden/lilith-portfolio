import React from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { GitHubIcon, ArrowRightCircleIcon } from './Icons';

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
									<ListGroup.Item href={repoLink} target="_blank" action className='d-flex justify-content-between lil-theme'>
										GitHub repository
										<GitHubIcon fill='#BA324F' className='h-100 my-auto' />
									</ListGroup.Item>
									{deployedLink && (
										<ListGroup.Item href={deployedLink} target="_blank" action variant='light' className='d-flex justify-content-between'>
											Deployed project
											<ArrowRightCircleIcon fill='#BA324F' className='h-100 my-auto' />
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
