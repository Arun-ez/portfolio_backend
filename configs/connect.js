require('dotenv').config();
const mongoose = require('mongoose');

const URI = process.env.MONGO_URI;

const connect = async () => {
    try {
        await mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('-------------------');
        console.log('Database Connected');
        console.log('-------------------');
    } catch (error) {
        console.log('-----------------------------');
        console.log('Unable to connect to Database');
        console.log('-----------------------------');
    }
}

module.exports = connect;