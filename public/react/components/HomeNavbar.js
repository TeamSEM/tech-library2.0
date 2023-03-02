import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import icon from '../img/cart4.svg'
import Cart from "./Cart";



export default function HomeNavbar({email}) {

  // const logOut = () => {
  //   location.reload()
  //   localStorage.removeItem("email");
  // }
  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://w7.pngwing.com/pngs/421/376/png-transparent-gemstone-bejeweled-diamond-computer-icons-blue-gem-gemstone-blue-angle.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            G.E.M Inventory
          </Navbar.Brand>
          <h5>{email ? email : ''}</h5>
          <Cart></Cart>
          { email ? 
             <Button 
             onClick={()=> {logOut()}}
             >Log Out</Button> 
             :
             ""
          }
         
        </Container>
      </Navbar>
    </div>
  )
}
