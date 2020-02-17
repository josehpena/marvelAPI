const express = require('express');
const app = express();
const mongoose = require('mongoose');
const routes = require('./routes');

mongoose.connect('mongodb+srv://usertest:usertest@marvelapi-pena-7yc2a.mongodb.net/test',
{
    useNewUrlParser: true, 
    useUnifiedTopology: true
});

app.use(express.json());
app.use(routes);

app.listen(3333);