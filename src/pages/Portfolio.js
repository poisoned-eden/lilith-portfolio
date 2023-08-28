import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MyGithub from '../components/MyGithub';
import { myProjects } from '../assets/myProjects';
import Project from '../components/Project';

export default function Portfolio() {
	return (
		<article>
			<h3>Portfolio</h3>
			<p>
				Have a look at a few of my projects. More can be found on{' '}
				<MyGithub text="my github" />
			</p>
			<Row sm={1} lg={2} xl={3} className='g-2'>
				{myProjects.map((project) => (
					<Col className=''>
						<Project {...project} />
					</Col>
				))}
			</Row>
		
	</article>);
}
