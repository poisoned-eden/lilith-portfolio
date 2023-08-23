import React from 'react';
import emailLogo from '../../assets/images/email-logo.png';
import phoneLogo from '../../assets/images/phone-call.png';
import githubLogo from '../../assets/images/github-mark.png';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function Contact() {
    return (
        <article id="contact-me">
            <h2>Contact Me</h2>
            <div>
                <h3>Contact Details</h3>
                <address class="content">
                    <div>
                        <img src={emailLogo} alt="" />
                        <a href="mailto:dev@lilithmf.com">dev@lilithmf.com</a>
                    </div>
                    
                    <div>
                        <img src={phoneLogo} alt="" />
                        <a href="tel:+447557911251">
                            +44 7557 911 251
                        </a>
                    </div>
                    <div>
                        <img src={githubLogo} alt="" />
                        <a href="https://github.com/poisoned-eden">
                            github.com/poisoned-eden
                        </a>
                    </div>
                </address>
            </div>
            <div>
                <h3>Send me a message</h3>
                <Form>
                    <div class="alert alert-primary" role="alert">
                        This form is currently disabled.  Please use the contact details above.
                    </div>
                    <fieldset disabled>
                        <Form.Group className='mb-3' controlId='formName'>
                            <Form.Label>Name</Form.Label>
                            <Form.Control type='text' placeholder='Please enter your name.'/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type='email' placeholder='Please enter your email address.'/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Message</Form.Label>
                            <Form.Control as='textarea' rows={3} placeholder='Please enter the message you wish to send.'/>
                        </Form.Group>
                    </fieldset>
                </Form>
            </div>
        </article>
    );
}
