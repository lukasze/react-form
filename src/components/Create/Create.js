import React, { useState } from 'react'
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios';
import { useHistory } from 'react-router';

function Create() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  let history = useHistory();

  function callMockApiWithAxiosPOST() {

    const formData = {
      firstName,
      lastName
    };

    const endpointURL = "https://614f39dcb4f6d30017b484f4.mockapi.io/api/v1/people";
    axios.post(endpointURL, formData)
      .then(() => history.push("/read"))
      .catch(
        (err) => { console.log(err) }
      );

  }

  return (
    <div>
      <Form>
        <Form.Field>
          <label>First Name</label>
          <input onChange={e => setFirstName(e.target.value)} placeholder='First Name' />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input onChange={e => setLastName(e.target.value)} placeholder='Last Name' />
        </Form.Field>
        <Button type='submit' onClick={callMockApiWithAxiosPOST}>Submit</Button>
      </Form>
    </div>
  )
}

export default Create
