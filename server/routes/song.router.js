const express = require('express');
const router = express.Router();

//REQUIRE pool.js into the ROUTER
const pool = require('../modules/pool');

router.get('/', ( req, res ) => {
    console.log(`in song router-GET`);
    res.sendStatus(200);
})

router.post('/', ( req, res ) => {
    console.log(`in song router-POST`);
    res.sendStatus(200);
})

router.put('/', ( req, res ) => {
    console.log(`in song router-UPDATE`);
    res.sendStatus(200);
})

router.delete('/', ( req, res ) => {
    console.log(`in song router-DELETE`);
    res.sendStatus(200);
})

module.exports = router;