// Create web server

// Import express
const express = require('express');

// Import comments controller
const commentsController = require('../controllers/commentsController.js');

// Create router
const commentsRouter = express.Router();

// Handle GET requests for post comments
commentsRouter.get('/comments/:postId', commentsController.getComments);

// Handle POST requests for post comments
commentsRouter.post('/comments/:postId', commentsController.postComment);

// Handle PUT requests for post comments
commentsRouter.put('/comments/:postId/:commentId', commentsController.putComment);

// Handle DELETE requests for post comments
commentsRouter.delete('/comments/:postId/:commentId', commentsController.deleteComment);

// Export router
module.exports = commentsRouter;