import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';


import Connection from './database/db.js';
import Routes from './routes/route.js';


const app =express();
dotenv.config();

app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use('/',Routes);

if(process.env.NODE_ENV === 'production'){
    app.use(express.static("client/build"));
}

const username=process.env.DB_USERNAME;
const password=process.env.DB_PASSWORD;
const URL =process.env.MONGODB_URI ||  `mongodb://${username}:${password}@cluster0-shard-00-00.3zgkh.mongodb.net:27017,cluster0-shard-00-01.3zgkh.mongodb.net:27017,cluster0-shard-00-02.3zgkh.mongodb.net:27017/?ssl=true&replicaSet=atlas-12gjv4-shard-0&authSource=admin&retryWrites=true&w=majority`
const PORT=process.env.PORT ||8000;
Connection(URL);
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
})