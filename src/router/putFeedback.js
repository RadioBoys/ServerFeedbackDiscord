const putFeedbackController = require('../controller/PutFeedback');
const express = require('express');
const route = express.Router();

route.put('/', putFeedbackController.putFeedback);

module.exports = route;
