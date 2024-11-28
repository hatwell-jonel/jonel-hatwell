import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';


const TableList = () => {
  return (
    <Table striped bordered hover variant="dark" className='mt-10'>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Role</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>
            <Link to="#">
                Mark
            </Link>
          </td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
      </tbody>
    </Table>
  )
}

export default TableList