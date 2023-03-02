import React from 'react';
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const Item = (props) => {

  return <div className='item' onClick={() =>props.clickThis(props.item.id)}>
          <Card id="itemCard" style={{ width: '12rem' }} >
            <Card.Img variant="top" src={props.item.image} style={{ width: '150px', height: '150px', margin: "20px" }} />
            <Card.Body>
              <Card.Title>{props.item.name}</Card.Title>
              <Card.Text>
              {props.item.description.substring(0,100)+"..."}
              </Card.Text>
              <Card.Text>
              ${props.item.price}
              </Card.Text>
            
            </Card.Body>
          </Card>
    </div>
} 