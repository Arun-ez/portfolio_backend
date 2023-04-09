const fs = require('fs');
const cors = require('cors')
const express = require('express');
const connect = require('./configs/connect');
const work_router = require('./routes/works.route');
const app = express();
app.use(cors());
app.use(express.static('uploads'));
app.use(express.static('public'));
app.use('/works', work_router);
const PORT = 8080;

connect();

app.get('/', (req, res) => {
    res.send(fs.readFileSync('./public/index.html', { encoding: "utf8", flag: "r" }));
})



app.listen(PORT, () => {
    console.log('---------------------------------');
    console.log(`Server listening om port ${PORT}...`);
    console.log('---------------------------------');
})