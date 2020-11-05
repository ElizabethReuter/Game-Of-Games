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
            res.render('index');
    });
// added post route for user input to database, see below:
router.route('/api/new')
    .post(function(req, res){
        console.log(req.body)
        db.Boardgames.create({
            gameId: req.body.id,
            games: req.body.name
        }).then(function(){
            console.log("added")
        })
    });
router.route('/api/search/:data').get(async function(req, res){
    let gameData = JSON.parse(req.params.data)
    let searchResult = await searchByAll(gameData);
    console.log(gameData.name);
    res.send(searchResult);
});

router.route('/api/savedGame').get(function(req, res){
    db.Boardgames.findAll().then(function(data){
        console.log(data);
    })
})

async function searchByAll(gameData) {
    try {
        let clientId = "Yulk2IjBB9"
        let {name, yearPublished, minPlayers, maxPlayers, minPlaytime, maxPlaytime, minAge} = gameData;
        let {data}= await axios.get(`https://api.boardgameatlas.com/api/search?name=${name}&pretty=true&client_id=${clientId}&year_published=${yearPublished}&min_players=${minPlayers}&max_players=${maxPlayers}&min_playtime=${minPlaytime}&max_playtime=${maxPlaytime}&min_age=${minAge}`);
        // console.log(data);
        return data; 
    } catch (error) {
        console.log(error);
    }
 
};

module.exports = router;