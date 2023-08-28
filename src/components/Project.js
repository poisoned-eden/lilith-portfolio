import React from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

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
							<Button href={repoLink} target="_blank">
								Link to Repo
							</Button>
							{deployedLink && (
								<Button href={deployedLink} target="_blank">
									Link to deployed project
								</Button>
							)}
						</Card.Body>
						<Card.Img src={screenshot} alt={alt} variant="bottom" />
					</Card>
				</Col>
			}
		</>
	);
}
