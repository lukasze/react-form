import React, { useState } from 'react'
import { Button, Form } from 'semantic-ui-react'

function Create() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const callMockAPI = ()=>{
    console.log(firstName + ' ' + lastName);
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
        <Button type='submit' onClick={callMockAPI}>Submit</Button>
      </Form>
    </div>
  )
}

export default Create
