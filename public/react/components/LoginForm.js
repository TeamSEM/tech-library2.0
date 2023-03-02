import React, {useState} from 'react'
// import InputGroup from 'react-bootstrap/InputGroup';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import apiURL from '../api';

export default function LoginForm({setUserEmail}) {
    const [username, setusername] = useState('');
	const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        // setUserusername(username)
        localStorage.setItem("username", username);

		const response = await fetch(`${apiURL}/users/register`, {
			method: "POST",
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(
				{
					username: username,
                    password: password
				}
			)
		});
		const data = await response.json();
	}
  return (
    <div>
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicusername">
                <Form.Label>username address</Form.Label>
                <Form.Control
                onChange={(e) =>{setusername(e.target.value)}}
                value={username} 
                type="email" 
                placeholder="Enter email" />
                <Form.Text className="" style={{color:"whitesmoke"}}>
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                  onChange={(e) =>{setPassword(e.target.value)}}
                  value={password} 
                type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button
            variant="primary" type="submit">
                Submit
            </Button>
		</Form>
    </div>
  )
}
