import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function Project({
	id,
	title,
	repoLink,
	deployedLink,
	screenshot,
	alt,
	description,
}) {
	return (
		<Card className="" key={id}>
			<Card.Body>
				<Card.Title>{title}</Card.Title>
				<Card.Text>{description}</Card.Text>
				<Button href={repoLink} target="_blank">
					Link to Repo
				</Button>
				<Button href={deployedLink} target="_blank">
					Link to deployed project
				</Button>
			</Card.Body>
			<Card.Img src={screenshot} alt={alt} variant="bottom" />
		</Card>

		// <div key={id}>
		//     <h4>{title}</h4
		// </div>
	);
}
