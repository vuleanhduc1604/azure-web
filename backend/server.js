const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;

mongoose.connect(uri);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('connected to mongodb database')
})

const newsRouter = require('./routes/news.js');
const coresRouter = require('./routes/cores.js')
const membersRouter = require('./routes/members.js')

app.use('/news', newsRouter);
app.use('/cores', coresRouter);
app.use('/members', membersRouter)

app.listen(port, () => {
    console.log(`server running on ${port}`)
})