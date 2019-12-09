const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const database = require('./database');
const systemRouter = require('./routes/system-router');

const app = express();
const apiPort = 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(bodyParser.json());

database.on('error', console.error.bind(console, 'Mongodb connection error:'));
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.use('/api', systemRouter);

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));