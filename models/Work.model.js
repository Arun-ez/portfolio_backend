const { Schema, model } = require('mongoose');

const WorkSchema = new Schema({
    title: {
        type: String,
        require: true
    },

    description: {
        type: String,
        require: true
    },

    images: {
        type: Array,
        require: true
    },

    tech_stacks: {
        type: Array,
        require: true
    },

    github_repo_url: {
        type: String,
        require: true
    },

    live_url: {
        type: String,
        require: true
    },
})

module.exports = model("works", WorkSchema);

