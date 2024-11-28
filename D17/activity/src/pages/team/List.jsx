import Table from 'react-bootstrap/Table';
import { team } from '../../data'
import { Link } from 'react-router-dom';

const TeamList = () => {

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
        {
          team.map((teamMember, index) => {
            return (
              <tr key={index} >
                <td>{teamMember.id}</td>
                <td >
                  <Link to={`/team/${teamMember.id}`} className='text-white link-underline-primary'>
                      {teamMember.name}
                  </Link>
                </td>
                <td>{teamMember.role}</td>
                <td>{teamMember.email}</td>
              </tr>
            )
          })
        }
      </tbody>
    </Table>
  )
}

export default TeamList