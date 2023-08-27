import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Project({id, title, repoLink, deployedLink, screenshot, alt, description}) {
    return (
        <Card className='mt-5'>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                <Row>
                    
                    <Col>
                        <Button href={repoLink} target='_blank'>Link to Repo</Button>
                    </Col>
                    <Col>
                        <Button href={deployedLink} target='_blank'>Link to deployed project</Button>
                    </Col>
                </Row>
            </Card.Body>
            <Card.Img src={screenshot} alt={alt} variant='bottom' />
        </Card>

        // <div key={id}>
        //     <h4>{title}</h4
        // </div>
    );
}
