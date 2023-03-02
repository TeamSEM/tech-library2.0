const express = require("express");
const { Books, Movies, Shows} = require("../models");
// const { books, shows, books, movies, shows } = require("../seedData");
// const {check, validationResult} = require('express-validator');

const router = express.Router();

//include middleware for parsing the body included into the request
router.use(express.json());
router.use(express.urlencoded({extended: true}));

//get all books
router.get("/", async (req, res) => {
    const books = await Books.findAll();
    res.json(books);
})

//get all movies
router.get("/", async (req, res) => {
    const movies = await Movies.findAll();
    res.json(movies);
})

//get all shows
router.get("/", async (req, res) => {
    const shows = await Shows.findAll();
    res.json(shows);
})

//get a specific book
router.get("/:id", async (req, res) => {
    const book = await Books.findByPk(req.params.id);
    res.json(book);
})

//get a specific movie
router.get("/:id", async (req, res) => {
    const movie = await Movies.findByPk(req.params.id);
    res.json(movie);
})

//get a specific show
router.get("/:id", async (req, res) => {
    const show = await Shows.findByPk(req.params.id);
    res.json(show);
})

//add a book
router.post("/", async (req,res) => {

    console.log('added item', req.body )
    const itemtoAdd = await Books.create(req.body);
    res.json(await Books.findAll());
    })

//add a movie
router.post("/", async (req,res) => {

    console.log('added item', req.body )
    const itemtoAdd = await Movies.create(req.body);
    res.json(await Movies.findAll());
    })

//add a show
router.post("/", async (req,res) => {

    console.log('added item', req.body )
    const itemtoAdd = await Shows.create(req.body);
    res.json(await Shows.findAll());
    })
    
//update a book

router.put("/:id", async (req, res) => {
    console.log("update from front end", req.body)
    await Books.update(req.body, {
        where: {
            id: req.params.id
        }
    })
    res.json(await Books.findAll());
})

//update a movie
router.put("/:id", async (req, res) => {
    console.log("update from front end", req.body)
    await Movies.update(req.body, {
        where: {
            id: req.params.id
        }
    })
    res.json(await Movies.findAll());
})

//update a show
router.put("/:id", async (req, res) => {
    console.log("update from front end", req.body)
    await Shows.update(req.body, {
        where: {
            id: req.params.id
        }
    })
    res.json(await Shows.findAll());
})


//delete a book 

router.delete('/:id', async (req,res)=>{
    await Books.destroy({
        where:{
            id: req.params.id
        }
    });
    res.json(await Books.findAll())
 })

 //delete a movie
 router.delete('/:id', async (req,res)=>{
    await Movies.destroy({
        where:{
            id: req.params.id
        }
    });
    res.json(await Movies.findAll())
 })

 //delete a show
 router.delete('/:id', async (req,res)=>{
    await Shows.destroy({
        where:{
            id: req.params.id
        }
    });
    res.json(await Shows.findAll())
 })

 

module.exports=router;