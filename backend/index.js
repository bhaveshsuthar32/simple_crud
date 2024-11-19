const express = require('express');
const mongoDB = require('./connection/dbCon');
const router = require('./routes/route');
const app = express();
require('dotenv').config();
const cors = require('cors')

const port = process.env.PORT || 5000

app.use(express.json())

mongoDB();

app.use(cors());

app.get("/checkServer", (req ,res) =>{
    res.send("hello wrld")
})

app.use("/", router)

app.listen(port , () =>{
    console.log(`server start on port : ${port}`)
})