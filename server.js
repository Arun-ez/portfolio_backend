const express = require('express');
const app = express();
app.use(express.static('uploads'));
const PORT = 8080;


app.get('/', (req, res) => {
    res.send('<a href=`./works`> /works </a>');
})

app.get('/works', (req, res) => {
    res.send('All works');
})


app.listen(PORT, () => {
    console.log(`Server listening om port ${PORT}`);
})