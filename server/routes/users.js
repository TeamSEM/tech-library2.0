const express = require("express");
const router = express.Router();
const {Users} = require("../models");
const jwt = require('jsonwebtoken');

// GET /users
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

//test

module.exports = router;
