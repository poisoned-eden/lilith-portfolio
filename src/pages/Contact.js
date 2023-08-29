import React from 'react';
import { EnvelopeAtIcon, TelephoneIcon, GitHubIcon } from '../components/Icons';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ContactForm from '../components/ContactForm';


export default function Contact() {
	return (
		<article id="contact-me">
			<h2 className='mb-4'>Contact Me</h2>
			<div>
				<h3>Contact Details</h3>
				<address>
					<div>
							<ButtonGroup role="button" aria-label='email address' className='pb-2' >
								<Button>
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
						<ButtonGroup role="button" aria-label='github link' className='pb-2'>
							<Button href='https://github.com/poisoned-eden' target='_blank'>
								<GitHubIcon fill='#BA324F' />
							</Button>
							<Button href='https://github.com/poisoned-eden' target='_blank'>github.com/poisoned-eden</Button>
							{/* TODO add copy button */}
						</ButtonGroup>
					</div>
				</address>
			</div>
			<div>
				<h3>Send me a message</h3>
				<ContactForm />
			</div>
		</article>
	);
}
