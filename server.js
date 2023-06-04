// Load the http module to create an HTTP server.
const http = require('http');

// Load the express module. Express is a minimal and flexible Node.js web application 
// framework that provides a robust set of features for web and mobile applications.
const express = require('express');

// Create an express application.
const app = express();

// Use the express.static middleware to serve static files. This includes images, CSS files, 
// and JavaScript files. In this case, 'public' is the folder that contains the static files.
app.use(express.static('public'));

// Define a route handler for GET requests made to the root path ('/'). When someone visits 
// the root path (i.e., http://localhost:8888/), the server will respond by sending the 
// 'index.html' file located in the 'public' directory.
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

// Create an HTTP server that listens for requests and sends responses. This server is 
// created using the http.createServer method and is configured to use the express app 
// as the request handler.
const server = http.createServer(app);

// Make the HTTP server listen on port 8888. When someone makes a request to port 8888 
// on your computer (i.e., http://localhost:8888), the server will receive the request 
// and send a response.
server.listen(8888, function () {
    // This function will be called when the server starts listening. In this case, it 
    // logs a message to the console.
    console.log("New app server is running on port 8888");
});
