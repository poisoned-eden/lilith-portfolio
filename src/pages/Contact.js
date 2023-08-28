import React from 'react';
import { EnvelopeAtIcon, TelephoneIcon, GitHubIcon } from '../components/Icons';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';


export default function Contact() {
	return (
		<article id="contact-me">
			<h2 className='mb-4'>Contact Me</h2>
			<div>
				<h3>Contact Details</h3>
				<address>
					<div>
							<ButtonGroup role="button" aria-label='email address' className='pb-2'>
								<Button href='mailto:hello@lilithmf.com' >
									<EnvelopeAtIcon fill='#BA324F' />
								</Button>
								<Button href='mailto:hello@lilithmf.com' > hello@lilithmf.com </Button>
								{/* TODO add copy button */}
							</ButtonGroup>
					</div>
					<div>
						<ButtonGroup role="button" aria-label='phone number' className='pb-2' >
							<Button href='tel:+447557911251' >
								<TelephoneIcon fill='#BA324F' />
							</Button>
							<Button href='tel:+447557911251' > +44 7557 911 251</Button>
							{/* TODO add copy button */}
						</ButtonGroup>
					</div>
					<div>
						<ButtonGroup role="button" aria-label='phone number' className='pb-2'>
							<Button href='https://github.com/poisoned-eden' >
								<GitHubIcon fill='#BA324F' />
							</Button>
							<Button href='https://github.com/poisoned-eden' >github.com/poisoned-eden</Button>
							{/* TODO add copy button */}
						</ButtonGroup>
					</div>
				</address>
			</div>
			<div>
				<h3>Send me a message</h3>
				<Form>
					<div class="alert" role="alert">
						The server behind this form is under construction.  In the meantime, it will create a custom mailto link that you can use to send the message you enter below via email.
					</div>
					<fieldset disabled>
						<Form.Group className="mb-3" controlId="formName">
							<Form.Label>Name</Form.Label>
							<Form.Control
								type="text"
								placeholder="Please enter your name."
							/>
						</Form.Group>
						<Form.Group className="mb-3">
							<Form.Label>Email</Form.Label>
							<Form.Control
								type="email"
								placeholder="Please enter your email address."
							/>
						</Form.Group>
						<Form.Group className="mb-3">
							<Form.Label>Message</Form.Label>
							<Form.Control
								as="textarea"
								rows={3}
								placeholder="Please enter the message you wish to send."
							/>
						</Form.Group>
						<Button>Send Message</Button>
					</fieldset>
				</Form>
			</div>
		</article>
	);
}
