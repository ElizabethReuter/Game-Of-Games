// IMPORTANT!!! URL 
// https://api.boardgameatlas.com/api/search?name=${name}&pretty=true&client_id=Yulk2IjBB9&year_published=${yearPublished}&min_players=${minPlayers}&max_players=${maxPlayers}&min_playtime=$(minPlaytime}&max_playtime=${maxPlaytime}&min_age=${minAge}

// const apiRoutes = require('./api');
const db = require('../models');
const router = require('express').Router();
const axios = require('axios');

// localhost:80080/api
// router.use('/api', apiRoutes);

//localhost8080/
router.route('/')
    .get(function(req, res) {
        axios.get("https://www.boardgameatlas.com/api/search?order_by=popularity&ascending=false&pretty=true&client_id=JLBr5npPhV").then(function(data){
            res.render('index', {res});
            // console.log("error", data);
        })
    });

router.route('/api/searchName/:name').get(async function(req, res){
    let gameName = req.params.name
    let searchResult = await searchByName(gameName)
    res.send(searchResult)
});

router.route('/api/searchYear/:year').get(async function(req, res){
    let gameYear = req.params.year
    let searchResult = await searchByYear(gameYear)
    res.send(searchResult)
});

// search by name 

async function searchByName(name) {
    try {
        let clientId = "Yulk2IjBB9"
        let {data}= await axios.get(`https://api.boardgameatlas.com/api/search?name=${name}&pretty=true&client_id=${clientId}`);
        return data; 
    } catch (error) {
        console.log(error);
    }
 
};

async function searchByYear(year) {
    try {
        let clientId = "Yulk2IjBB9"
        let {data}= await axios.get(`https://api.boardgameatlas.com/api/search?year_published=${year}&pretty=true&client_id=${clientId}`);
        return data;
    } catch (error){
        console.log(error);
    }
};

module.exports = router;
