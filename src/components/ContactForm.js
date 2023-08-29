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
        console.log(data);
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        window.location.href = `mailto:hello@lilithmf.com?subject=Message from ${data.userName}&body=${data.userMessage} \n \n from ${data.userEmail}`;

        alert('Thank you for sending a message.');
        setData(formData);
        console.log(data);
    }

    const handleInputLoseFocus = (e) => {
        e.target.reportValidity();
    }
	return (
		<Form onSubmit={handleFormSubmit}>
			<div class="alert" role="alert">
				The server behind this form is under construction, so it will
				not send a message in the normal way. In the meantime, it will
				create a custom mailto link that you can use to send the message
				you enter below via email.
			</div>
			<fieldset>
				<Form.Group className="mb-3" controlId="formName">
					<Form.Label>Name</Form.Label>
					<Form.Control
						type="text"
                        id="userName"
						placeholder="Please enter your name."
                        value={data.userName}
                        onChange={handleInputChange}
                        onBlur={handleInputLoseFocus}
                        required
					/>
				</Form.Group>
				<Form.Group className="mb-3">
					<Form.Label>Email</Form.Label>
					<Form.Control
						type="email"
                        id="userEmail"
						placeholder="Please enter your email address."
                        value={data.userEmail}
                        onChange={handleInputChange}
                        onBlur={handleInputLoseFocus}
                        required
					/>
				</Form.Group>
				<Form.Group className="mb-3">
					<Form.Label>Message</Form.Label>
					<Form.Control
						as="textarea"
						rows={3}
						placeholder="Please enter the message you wish to send."
                        id="userMessage"
                        value={data.userMessage}
                        onChange={handleInputChange}
                        onBlur={handleInputLoseFocus}
                        required
					/>
				</Form.Group>
				<Button type='submit'>
                    Send Message
                </Button>
			</fieldset>
		</Form>
	);
}
