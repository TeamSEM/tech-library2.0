import React, { useState, useEffect } from 'react';
import { ItemsList } from './ItemList';
import HomeNavbar from './HomeNavbar';
import LoginForm from './LoginForm';
import InputGroup from 'react-bootstrap/InputGroup';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import apiURL from '../api';

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
export const App = () => {

	const [items, setItems] = useState(null);
	const [userEmail, setUserEmail] = useState('');
	const newEmail = localStorage.getItem("email");

	const [cart, setCart] = useState({})

	async function getItems() {
		try {
			const res = await fetch(`${apiURL}/items`);
			const data = await res.json();

			console.log('data from items', data)
			setItems(data);
		} catch (error) {
			console.log("Oh no an error! ", err)
		}
	}

	return (
		<main>	
			<HomeNavbar email={newEmail}/>
			{newEmail ?
			<div > { items ? 
				<div className="listContainer">
					<div className='listSection'>
					<ItemsList items={items} setItems={setItems}/>
					</div>
				</div>
				:
				<div className='allOrSearch'>
				<div className='row'>
					<div className='col' id='left'>
						<Button onClick={()=>{getItems()}}>Search All Items</Button>
					</div>
					<div className='col' id="right">
					<InputGroup className="mb-3 w-100">
						<h5>Search by Category</h5>
						<div>
						<InputGroup className="mb-3">
							<Form.Control aria-label="Text input with dropdown button" />

							<DropdownButton
							variant="outline-light"
							title="Category"
							id="input-group-dropdown-2"
							align="end"
							>
							<Dropdown.Item href="#">Men's Clothing</Dropdown.Item>
							<Dropdown.Item href="#">Women's Clothing</Dropdown.Item>
							<Dropdown.Item href="#">jewelery</Dropdown.Item>
							{/* <Dropdown.Divider /> */}
							<Dropdown.Item href="#">electronics</Dropdown.Item>
							</DropdownButton>
						</InputGroup>
						</div>	
					</InputGroup>
					</div>
				</div>
				</div>
				}
			</div>
			:
			<div className='loginForm'>
				<div className='logContainer'>
				<div className='row'>
				<div className='col'>
				<LoginForm setUserEmail={setUserEmail} userEmail={userEmail} />
				</div>
				</div>
				</div>
			</div>
			}	
		</main>
	)
}