import React from 'react';
import Row from 'react-bootstrap/Row';
import MyGithub from '../components/MyGithub';
import { myProjects } from '../assets/myProjects';
import Project from '../components/Project';

export default function Portfolio() {
	return (
		<article className=''>
			<h2 className='mb-4'>Portfolio</h2>
			<p>
				Have a look at a few of my projects. More can be found on{' '}
				<MyGithub text="my github" />
			</p>
			<Row sm={1} lg={2} xl={3} className="g-3">
				{myProjects.map((project) => (
					<Project {...project} />
				))}
			</Row>
		</article>
	);
}
