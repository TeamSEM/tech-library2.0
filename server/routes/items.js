const express = require("express");
const {Items} = require("../models");
// const {check, validationResult} = require('express-validator');

const router = express.Router();

//include middleware for parsing the body included into the request
router.use(express.json());
router.use(express.urlencoded({extended: true}));

//get all items
router.get("/", async (req, res) => {
    const items = await Items.findAll();
    res.json(items);
})

//get a specific item
router.get("/:id", async (req, res) => {
    const item = await Items.findByPk(req.params.id);
    res.json(item);
})
//add item
router.post("/", async (req,res) => {

    console.log('added item', req.body )
    const itemtoAdd = await Items.create(req.body);
    res.json(await Items.findAll());
    })
    
//update item

router.put("/:id", async (req, res) => {
    console.log("update from front end", req.body)
    await Items.update(req.body, {
        where: {
            id: req.params.id
        }
    })
    res.json(await Items.findAll());
})


//delete item

router.delete('/:id', async (req,res)=>{
    await Items.destroy({
        where:{
            id: req.params.id
        }
    });
    res.json(await Items.findAll())
 })

 

module.exports=router;