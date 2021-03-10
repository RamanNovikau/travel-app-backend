const express = require('express')
const bodyParser = require('body-parser');
var cors = require('cors')
const app = express()
app.use(cors())
const port = process.env.PORT || 3000;

const MongoClient = require("mongodb").MongoClient;

const url = "mongodb+srv://memory-game:ePWMNoNJtnrvZ4dv@cluster0.bsofz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const mongoClient = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
let dbClient;

mongoClient.connect((err, client) => {
    if (err) return console.log(err);
    dbClient = client;
    app.locals.collection = client.db("travel-app-db").collection("countries");
    app.listen(port, function () {
        console.log("Сервер ожидает подключения...");
    });
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());;

app.get('/countries', function (request, response) {
    const collection = request.app.locals.collection;
    collection.find({}).toArray(function (err, result) {
        if (err) throw err;
        response.send(result);
    });
});