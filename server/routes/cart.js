const express = require("express");
const {Items, Cart} = require("../models");

// const {check, validationResult} = require('express-validator');

const router = express.Router();

//include middleware for parsing the body included into the request
router.use(express.json());
router.use(express.urlencoded({extended: true}));

//get all items in cart
router.get("/", async (req, res) => {
    const cart = await Cart.findByPk(1, {
        include: [{model: Items}]
    });
    res.json(cart);
})


//add item to cart
router.post("/", async (req,res) => {
    // const itemtoAdd = await Items.create(req.body);
    const cart = await Cart.findByPk(1);
    const item = await Items.findByPk(req.body.id);
    await cart.addItems(item)
    res.json(item);
    })


module.exports = router;
