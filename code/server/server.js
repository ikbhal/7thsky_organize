// express
const express = require('express');
const app = express();
const http = require('http').Server(app);

app.get('/ping', function(req, res){
    res.send("pong");
});

app.use(express.static("public"));
const server = http.listen(3000, function() {
    console.log('listening on *:3000');
});