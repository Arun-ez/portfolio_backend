const Work = require('../models/Work.model');


const getWorksData = async () => {
    try {
        let data = await Work.find();
        return { data: data }
    } catch (error) {
        throw new Error('Internal Server Error');
    }
}

module.exports = { getWorksData }