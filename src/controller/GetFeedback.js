const FeedbackModel = require("./modelSchema.js");

class GetFeedback {
    getFeedback(req, res) {
        try {
            async function getData() {
                const feedbacks = await FeedbackModel.find({});
                res.json(feedbacks);
            }
            getData();

        } catch (error) {
            console.error('Error fetching feedback data:', error);
            res.status(500).send('Internal Server Error');
        }
    }
}

module.exports = new GetFeedback;
