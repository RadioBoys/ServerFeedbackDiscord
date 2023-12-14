const FeedbackModel = require('./modelSchema');
// Insert data to MongoDB with [POST] method
async function insert(comment, uid, username, cid, status) {
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

module.exports = { insert };
