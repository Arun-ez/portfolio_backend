const express = require('express');
const router = express.Router();

const { getWorksData } = require('../controllers/works')

router.get('/', async (req, res) => {
    try {
        let respose = await getWorksData();
        res.send(respose);
    } catch (error) {
        res.status(400).send({ error: error.message })
    }
})


module.exports = router;