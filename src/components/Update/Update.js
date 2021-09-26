import React, { useState, useEffect } from 'react'
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios';

function Update() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [id, setId] = useState(null);

  function callMockApiWithAxiosPOST() {

    const formData = {
      firstName,
      lastName,
      id
    };

    const endpointURL = `https://614f39dcb4f6d30017b484f4.mockapi.io/api/v1/people/${id}`;
    axios.put(endpointURL, formData)
      .then(response => console.log(response.data))
      .catch(
        (err) => { console.log(err) }
      );

  }

  useEffect(() => {
    setFirstName(localStorage.getItem('firstName'));
    setLastName(localStorage.getItem('lastName'));
    setId(localStorage.getItem('id'));
  }, [])

  return (
    <div>
      <Form>
        <Form.Field>
          <label>First Name</label>
          <input 
            name="firstName"
            onChange={e => setFirstName(e.target.value)}
            placeholder='First Name'
            value={firstName} />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input 
            name="lastName"
            onChange={e => setLastName(e.target.value)}
            placeholder='Last Name'
            value={lastName} />
        </Form.Field>
        <Button type='submit' onClick={callMockApiWithAxiosPOST}>Update</Button>
      </Form>
    </div>
  )
}

export default Update
