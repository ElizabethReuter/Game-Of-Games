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

router.route('/api/search/:data').get(async function(req, res){
    let gameData = JSON.parse(req.params.data)
    let searchResult = await searchByAll(gameData);
    console.log(gameData.name);
    res.send(searchResult);
});

async function searchByAll(gameData) {
    try {
        let clientId = "Yulk2IjBB9"
        let {name, yearPublished, minPlayers, maxPlayers, minPlaytime, maxPlaytime, minAge} = gameData;
        let {data}= await axios.get(`https://api.boardgameatlas.com/api/search?name=${name}&pretty=true&client_id=${clientId}&year_published=${yearPublished}&min_players=${minPlayers}&max_players=${maxPlayers}&min_playtime=${minPlaytime}&max_playtime=${maxPlaytime}&min_age=${minAge}`);
        return data; 
    } catch (error) {
        console.log(error);
    }
 
};

module.exports = router;
