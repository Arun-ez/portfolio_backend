const express = require('express');
const app = express();
app.use(express.static('uploads'));
const PORT = 8080;


app.get('/', (req, res) => {
    res.send('Server running...');
})

app.listen(PORT, () => {
    console.log(`Server listening om port ${PORT}`);
})