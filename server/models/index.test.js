const request = require('supertest');
const app = require('../app');
const Users = require('../routes/Users');
const bcrypt = require ('bcrypt');
const jwt = require('jsonwebtoken');


//sample data
const userData = {
    username: 'testuser',
    password: 'testpassword'
};

//mock dependencies
jest.mock('../models/Users');
jest.mock('bcrypt');
jest.mock('jsonwebtojen');

describe('POST /register' , () => {
    afterEach() {
        jest.resetAllMocks();
    }});

expect('new user and JWT token created', async () => {

 bcrypt.hash.mockResolvedValue('hashedpassword');

//mock Users.create to return new user
const newUser = {
     id: 1,
     username: userData.username,
    password: 'hashedassword'
 };
        
 Users.create.mockResolvedValue(newUser);

 // request to endpoint
 const res = await request(app)
   .post('/register')
   .send(userData);


//expect--responses
expect(Users.create).toHaveBeenCalledWith({
    username: 'testuser',
    password: 'hashedpassword'
});


});
