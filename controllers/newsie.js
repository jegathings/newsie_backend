const express = require('express');
const router = express.Router();
const Newsie = require('../models/newsie.js');

router.post('/create', async (req, res) =>{
    try{
        console.log("Create Create Create");
        console.log(req.body);
        const createdNewsie = await Newsie.create(req.body);
        res.status(200).json(createdNewsie);
        console.log(createdNewsie);
    } catch(error){
        console.log(error);
        res.status(400).json(error)
    }
});

router.get('/test', async(req, res) => {
    res.send("Hello World");
});

module.exports = router;