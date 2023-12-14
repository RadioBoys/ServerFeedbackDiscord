const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const url = "mongodb://127.0.0.1/discordFeedback";

async function connect() {
    try {
        await mongoose.connect(url);
        console.log("Connected successfully!!!");
    } catch (error) {
        console.log(error);
    }
};

module.exports = { connect };
