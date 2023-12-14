const insertData = require('./SchemaPostFeedback');

class PostFeedback {
    postFeedback(req, res) {
        insertData.insert(req.body.comment, req.body.discordUID, req.body.discordUsername, req.body.discordCID, req.body.status);
        console.log(req.body);
        //     res.send(req.body.discordUsername);
    }
}

module.exports = new PostFeedback;
