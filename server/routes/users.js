const express = require("express");
const router = express.Router();
const { Users , Cart} = require("../models");
const bcrypt = require('bcrypt');
const {sequelize} = require("sequelize")
const jwt = require('jsonwebtoken');

//include middleware for parsing the body included into the request
router.use(express.json());
router.use(express.urlencoded({extended: true}))

const SALT_COUNT = 10;
const {JWT_SECRET} = process.env;

const setUser = async (req, res, next) => {
    /* handler logic*/
      try{
      const auth = req.header('Authorization');
          if(!auth) {
              next();
          } else {
          const [,token] = auth.split(' ');
          const user = jwt.verify(token, JWT_SECRET);
          req.user = user;
          next()
          }
      } catch({message}) {
          res.sendStatus(401);
          next({message})
      }
    }

// GET /users
router.post('/register',setUser,async (req, res, next) => {
  try {
      const {username, password} = req.body;
      // create a new user
  
      const hashedPassword = await bcrypt.hash(password, SALT_COUNT);
      const {id, user} = await Users.create({
      username: username,
      password: hashedPassword
      });
      const token = jwt.sign({id,username}, process.env.JWT_SECRET);
      console.log('token', token, user)
      res.send({message: 'success', token });
  } catch (error) {
      console.log(error);
      next(error);
  }
});
router.get("/", async (req, res, next) => {
  try {
    const users = await Users.findAll();
    res.send(users);
  } catch (error) {
    next(error);
  }
});

// GET /users/:userId
router.get("/:userId", async (req, res, next) => {
  try {
    const user = await Users.findByPk(req.params.userId, {
      include: [{ model: Cart }]
    });

    if(!user) {
      res.status(404);
      next();
    } else {
      res.send(user);
    }
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req,res) => {
  console.log("user from front end", req)
  try {
    const newUser = await Users.create({
        email: req.body.email,
        password: req.body.password
    });

    res.json(newUser);
  } catch (error) {
    console.log('error with user', error)
  }
})
///test test
module.exports = router;
