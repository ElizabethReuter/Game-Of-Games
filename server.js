require('dotenv').config();

const express = require('express');
const handlebars = require('express-handlebars');


const db = require('./models');

const routes = require('./routes');

const app= express();

const PORT = process.env.PORT || 8080

app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.engine("handlebars", handlebars({ defaultLayout: "main", runtimeOptions: {
    allowProtoPropertiesByDefault: true,
    allowProtoMethodsByDefault: true,
},
}));
app.set("view engine", "handlebars");

app.use(routes);

db.sequelize.sync({}).then(function(){
    app.listen(PORT, function(){
        console.log("Server listening on http://localhost:" + PORT);
    });
});