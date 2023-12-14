const mongoose = require('mongoose');

// Define the schema for feedback
const feedbackSchema = new mongoose.Schema({
    comment: { type: String },
    discordUID: { type: String },
    discordUsername: { type: String },
    discordCID: { type: String },
    status: { type: String },
});

// // Create a model based on the schema
const FeedbackModel = mongoose.model('users', feedbackSchema);

module.exports = FeedbackModel;
