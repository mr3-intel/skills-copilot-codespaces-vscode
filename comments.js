// Create web server
var express = require('express');
var app = express();
// Create a router
var router = express.Router();
// Use router
app.use('/comments', router);
// Define a route
router.get('/list', function(req, res) {
    res.send('List of comments');
});
router.get('/show', function(req, res) {
    res.send('Show a comment');
});
// Start the server
app.listen(3000, function() {
    console.log('Server is running on http://localhost:3000');
});