const express = require('express');

const app = express(); 

const dotenv = require('dotenv');  
dotenv.config();

const connectDB = require('./config/database');
connectDB()



const cors = require('cors');
app.use(cors());

const PORT = process.env.PORT || 8000

app.use(express.urlencoded());
app.use(express.json());

app.use('/',require('./routes/indexRoute'));

app.listen(PORT,(err)=>{
    if(err){
        console.log(err);
        return false;
    }
    console.log(`server is start :- ${process.env.PORT}`);
})