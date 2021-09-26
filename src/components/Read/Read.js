import React, { useState, useEffect } from 'react'
import { Button, Table } from 'semantic-ui-react'
import axios from 'axios'
import { Link } from 'react-router-dom';

function Read() {
  const [tableData, setTableData] = useState([]);

  function callMockApiWithAxiosGET() {

    const endpointURL = "https://614f39dcb4f6d30017b484f4.mockapi.io/api/v1/people";
    axios.get(endpointURL)
      .then(response => setTableData(response.data))
      .catch(
        (err) => { console.log(err) }
      );

  }

  function setFirstNameAndLastNameInLocalStorage(data) {
    console.log(data.id + ' ' + data.firstName + ' ' + data.lastName);
    localStorage.setItem("id", data.id);
    localStorage.setItem("firstName", data.firstName);
    localStorage.setItem("lastName", data.lastName);
  }

  const onDelete = (id) => {
    const endpointURL = `https://614f39dcb4f6d30017b484f4.mockapi.io/api/v1/people/${id}`;
    axios.delete(endpointURL)
      .then(() => callMockApiWithAxiosGET())
      .catch(
        (err) => { console.log(err) }
      );
  }


  useEffect(() => {
    callMockApiWithAxiosGET();
  }, []);



  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>ID</Table.HeaderCell>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Last Name</Table.HeaderCell>
            <Table.HeaderCell>Update</Table.HeaderCell>
            <Table.HeaderCell>Delete</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {tableData.map(
            data => {
              return (
                <Table.Row>
                  <Table.Cell>{data.id}</Table.Cell>
                  <Table.Cell>{data.firstName}</Table.Cell>
                  <Table.Cell>{data.lastName}</Table.Cell>
                  <Table.Cell>
                    <Link to="/update">
                      <Button color="green" onClick={() => setFirstNameAndLastNameInLocalStorage(data)}>Update</Button>
                    </Link>
                  </Table.Cell>
                  <Table.Cell>
                    <Button color="red" onClick={() => onDelete(data.id)}>Delete</Button>
                  </Table.Cell>
                </Table.Row>
              )
            }
          )}
        </Table.Body>
      </Table>
    </div>
  )

}

export default Read

