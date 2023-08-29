import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function ContactForm() {
    const formData = { userName: "", userEmail: "", userMessage: ""};

    const [data, setData] = useState(formData);

    const handleInputChange = (e) => {
        // getting the value and name of the input that triggered the change callback
        const { id, value } = e.target;

        setData({ ...data, [id]: value });
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();

        alert('Thank you for sending a message.');
        setData(formData);
    }
	return (
		<Form>
			<div class="alert" role="alert">
				The server behind this form is under construction, so it will
				not send a message in the normal way. In the meantime, it will
				create a custom mailto link that you can use to send the message
				you enter below via email.
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
	);
}
