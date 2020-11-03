// const apiRoutes = require('./api');
const db = require('../models');
const router = require('express').Router();
const axios = require('axios');

// localhost:80080/api
// router.use('/api', apiRoutes);

//localhost8080/
router.route('/')
    .get(function(req, res) {
        axios.get("https://www.boardgameatlas.com/api/search?order_by=popularity&ascending=false&pretty=true&client_id=JLBr5npPhV").then(function(res){
            res.render('index', {res});
            console.log(res);
        })
        // get the burger data
        // db.Burger.findAll({}).then(function(burgerData) {
        //     res.render('index', { burgers: burgerData })
        // })
        
    });

router.route('/').get(function(req,res){
    axios.get("https://www.boardgameatlas.com/api/reviews?pretty=true&client_id=Yulk2IjBB9").then(function(res){
        res.render('index', {res});
        console.log(res);
    })
})

//localhost8080/garbledegook
//no known route is hit is his send default
router.use(function(req, res) {
    res.render('404', {error: "This aint the spot"})
});

module.exports = router;
