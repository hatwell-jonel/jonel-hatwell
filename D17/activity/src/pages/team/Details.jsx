import { useParams,useNavigate  } from "react-router-dom";
import { team } from '../../data';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const TeamDetails = () => {

  const {id} = useParams();
  const navigate = useNavigate();
  const teamMember = team.find(member => member.id === parseInt(id));
  
  return (
    <>
      <Button variant="outline-light" className="mb-3" onClick={() => navigate(-1)}>Back</Button>
      <Card style={{ width: '18rem' }} className="bg-dark text-white" >
        <ListGroup variant="flush">
          <ListGroup.Item>Name: <span className="fw-bold">{teamMember.name}</span></ListGroup.Item>
          <ListGroup.Item>Role: <span className="fw-bold">{teamMember.role}</span></ListGroup.Item>
          <ListGroup.Item>Email: <span className="fw-bold">{teamMember.email}</span></ListGroup.Item>
        </ListGroup>
      </Card>
    </>
  )
}

export default TeamDetails