const getFeedbackController = require('../controller/GetFeedback');
const express = require('express');
const route = express.Router();

route.get('/', getFeedbackController.getFeedback);

module.exports = route;
