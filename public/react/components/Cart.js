import React from 'react'
import Button from 'react-bootstrap/Button';
import icon from '../img/cart4.svg'


const handleClick = async (e) => {
    console.log("hello")
   
}

const Cart = () => {
    return(
        <Button variant="primary" onClick ={handleClick} >
            <img src={icon} alt="" width="32" height="32"></img>
        </Button>
    )
  };
  
  
  export default Cart;