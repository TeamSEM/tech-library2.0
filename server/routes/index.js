const express = require("express");
const router = express.Router();

// different model routers
// router.use('/sauces', require('./sauces'));
router.use('/items', require('./items'));
// router.use('/cart', require('./cart'));
router.use('/users', require('./users'));

module.exports = router;


//testing 