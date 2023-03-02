import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import apiURL from '../api';

export const AddItemModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(Number)
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');
  
console.log('apiurl', apiURL)
  const handleSubmit = async (e) => {
		const response = await fetch(`${apiURL}/items/`, {
			method: "POST",
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(
				{
					name: name,
					description: description,
          price: price,
          category: category,
          image: image,
				}
			)
		});
		const data = await response.json();
	}

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Item
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Denim Jeans"
                autoFocus
                onChange={(e)=>{setName(e.target.value)}}
                value={name}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" 
              rows={3} 
              placeholder="slim fit denim made with the best quality materials..."
              onChange={(e)=>{setDescription(e.target.value)}}
              value={description}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="text"
                placeholder="$11.00"
                autoFocus
                onChange={(e)=>{setPrice(e.target.value)}}
                value={price}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Category</Form.Label>
              <Form.Control
                type="text"
                placeholder="Men's Clothing"
                autoFocus
                onChange={(e)=>{setCategory(e.target.value)}}
                value={category}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="text"
                placeholder="Image Url"
                autoFocus
                onChange={(e)=>{setImage(e.target.value)}}
                value={image}
              />
            </Form.Group>
            <Button type='submit' variant="primary">
            Save Changes
          </Button>
          </Form>
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
