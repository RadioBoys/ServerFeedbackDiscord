const FeedbackModel = require("./modelSchema.js");

class PutFeedback {
    putFeedback(req, res) {
        try {
            const { status } = req.params;

            // Find the comment with 'new' status
            async function changeStatus() {
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
            }
            changeStatus();

        } catch (error) {
            console.error('Error updating comment status:', error);
            res.status(500).send('Internal Server Error');
        }
    }
}

module.exports = new PutFeedback;
