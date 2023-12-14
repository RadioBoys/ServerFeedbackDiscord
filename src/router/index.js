const getRoute = require('./getFeedback');
const postRoute = require('./postFeedback');
const putRoute = require('./putFeedback');

function route(app) {
    // [GET] comment;
    app.use('/api/comments', getRoute);
    app.use('/api/comment', postRoute);
    app.use('/api/comment/status/:status', putRoute);
    app.use('/', (req, res) => {
        res.send("Go to http://localhost:3030/api/comments to get comments");
    });
}

module.exports = route;
