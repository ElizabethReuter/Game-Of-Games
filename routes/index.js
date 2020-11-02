// const apiRoutes = require('./api');
const db = require('../models');
const router = require('express').Router();

// localhost:80080/api
// router.use('/api', apiRoutes);

//localhost8080/
router.route('/')
    .get(function(req, res) {
        // get the burger data
        // db.Burger.findAll({}).then(function(burgerData) {
        //     res.render('index', { burgers: burgerData })
        // })
        res.render('index', {});
    });

//localhost8080/garbledegook
//no known route is hit is his send default
router.use(function(req, res) {
    res.render('404', {error: "This aint the spot"})
});

module.exports = router;
