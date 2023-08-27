import React from 'react';
import imgLil from '../assets/images/Lilith-profile-pic.jpg';

export default function AboutMe() {
	return (
		<article id="about-me">
			<div class="article-heading">
				<h2>About Me</h2>
			</div>
			<div class="content">
				<p>
					Hi, I'm Lilith. I originally got into coding through working
					on a website at the Environmental Consultancy I worked at. I
					swiftly discovered I enjoyed it, and was given other
					interesting little projects and tools to build for the
					company, in various different languages and contexts such as
					Python for GIS, VBA for Excel, and SQL.
				</p>
				<img
					src={imgLil}
					alt="Photograph of Lilith engaged in conversation.  There is a castle in the background."
				/>
				<p>
					Since then, much has happened. I spent quite a while as a
					full-time parent, during which I learned about, and got
					diagnosed with, ADHD. The particular mix of ADHD and
					carrying the mental load of a family has led me to seek
					technological solutions to make daily life easier. As I have
					grown increasingly frustrated with the lack of actually
					usable and useful tools, I decided to take matters into my
					own hands and make the damn things myself.
				</p>
				<p>So watch this space. Big things are coming!</p>
				<p>
					I'm currently studying an intensive Full Stack Web
					Development "Coding Bootcamp" through the University of
					Birmingham. The pages deployed on my github are coursework
					assignments for this. I am also self-employed as a Virtual
					Assistant, and have created the websites linked below for
					clients.
				</p>
			</div>
		</article>
	);
}
