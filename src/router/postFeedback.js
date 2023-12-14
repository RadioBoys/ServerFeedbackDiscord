const postFeedbackController = require('../controller/PostFeedback');
const express = require('express');
const route = express.Router();

route.post('/', postFeedbackController.postFeedback);

module.exports = route;
