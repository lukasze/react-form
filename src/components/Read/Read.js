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
                  <Table.Cell>{data.name}</Table.Cell>
                  <Table.Cell>{data.lastName}</Table.Cell>
                  <Table.Cell>
                    <Link to="/update">
                      <Button color="green">Update</Button>
                    </Link>
                  </Table.Cell>
                  <Table.Cell>
                    <Link to="/delete">
                      <Button color="red">Delete</Button>
                    </Link>
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

