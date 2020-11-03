require('dotenv').config();

const express = require('express');
const handlebars = require('express-handlebars');
// const mysql = require('mysql2');
// const Sequelize = require('sequelize');

const db = require('./models');

const routes = require('./routes');

const app= express();

const PORT = process.env.PORT

app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(routes);
// console.log(routes);

db.sequelize.sync().then(function(){
    app.listen(PORT, function(){
        console.log("Server listening on http://localhost:" + PORT);
    });
});

// module.exports = routes;