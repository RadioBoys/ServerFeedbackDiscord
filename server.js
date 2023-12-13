const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const db = require('./src/connection/connection.js');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Connect to MongoDB
db.connect();

// Define the schema for feedback
const feedbackSchema = new mongoose.Schema({
    comment: { type: String },
    discordUID: { type: String },
    discordUsername: { type: String },
    discordCID: { type: String },
    status: { type: String },
});

// Create a model based on the schema
const FeedbackModel = mongoose.model('users', feedbackSchema);

// Insert data to MongoDB with [POST] method
async function insertData(comment, uid, username, cid, status) {
    try {
        const instance = new FeedbackModel({
            comment: comment,
            discordUID: uid,
            discordUsername: username,
            discordCID: cid,
            status: status,
        });
        await instance.save();
    } catch (error) {
        console.log(error);
    }
}

// GET route to get all feedback data
app.get('/api/comments', async (req, res) => {
    try {
        const feedbacks = await FeedbackModel.find({});
        res.json(feedbacks);
    } catch (error) {
        console.error('Error fetching feedback data:', error);
        res.status(500).send('Internal Server Error');
    }
});

// POST route to add a comment
app.post('/api/comment', (req, res) => {
    insertData(req.body.comment, req.body.discordUID, req.body.discordUsername, req.body.discordCID, req.body.status);
    console.log(req.body);
    res.send(req.body.discordUsername);
});

// PUT route to update comment status
// PUT route to update comment status
app.put('/api/comment/status/:status', async (req, res) => {
    try {
        const { status } = req.params;

        // Find the comment with 'new' status
        const commentToUpdate = await FeedbackModel.findOneAndUpdate(
            { status: 'new' },
            { status: 'resolved' },
            { new: true } // To return the updated document
        );

        if (!commentToUpdate) {
            return res.status(404).send('No new comments found');
        }

        console.log('Updated comment:', commentToUpdate);
        res.send('Comment status updated to resolved');
    } catch (error) {
        console.error('Error updating comment status:', error);
        res.status(500).send('Internal Server Error');
    }
});

// Start the Express server
app.listen(3000, () => console.log('Server listening on port 3000!'));
