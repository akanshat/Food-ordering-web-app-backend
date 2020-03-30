const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { MongoClient } = require('mongodb');
require('dotenv').config();

const search = require('./controllers/search');
const handleLogin = require('./controllers/login');
const handleRegister = require('./controllers/register');
const menuList = require('./controllers/menu');
const user = require('./controllers/user');
const app = express();

app.use(cors());
app.use(bodyParser.json());

const port = process.env.PORT || 4000;
const url = process.env.MONGO_URL;
const databaseName =  process.env.DB_NAME;

MongoClient.connect(url, { useUnifiedTopology: true }, (error, client)=>{
    
    if(error)
        throw error;
    
    const db = client.db(databaseName);

    app.get("/api", (req, res) => {
        res.send("hello!");
    })
    
    app.post("/api/register", (req, res)=>{
        handleRegister(req, res, db);
    })
    
    app.post("/api/login", (req, res)=>{
        handleLogin(req, res, db);
    })
    
    app.post("/api/search",(req, res)=>{
        search(req,res,db);
    })
    
    app.get('/api/menu', (req, res)=> {
        menuList(req,res,db);
    })

    app.get('/api/user', (req, res)=>{
        user(req,res,db);
    })

    app.listen(port, () => {
        console.log(`app is running on port - ${port}`);
    })
})