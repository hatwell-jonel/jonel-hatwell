import { useState } from 'react';
import { Modal,  Card } from 'react-bootstrap';
import styled from 'styled-components';


const CardImg = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 8px 8px 0 0;
`;


const Button = styled.button`
  background-color: #3498db;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  
  &:hover {
    background-color: #2980b9;
  }
`;

function ProductCard({product}) {
    // State to manage modal visibility
    const [showModal, setShowModal] = useState(false);

    // Handle opening and closing of the modal
    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    return (
        <>
            <Card style={{ width: '18rem' }}>
            <CardImg variant="top" src={product.image} alt={product.title} />
            <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>
                    <span className='fw-bold'>Price: </span>
                    {product.price}
                </Card.Text>
                <Button variant="primary" onClick={handleShow}>View Details</Button>
            </Card.Body>
            </Card>

            {/* Modal for Product Details */}
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{product.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={product.image} alt={product.title} className="img-fluid mb-3" />
                    <p><span className="fw-bold">Description: </span>{product.description}</p>
                    <p><span className="fw-bold">Price: </span>${product.price}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ProductCard;