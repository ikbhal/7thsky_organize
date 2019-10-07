// express
const express = require('express');
const app = express();
const http = require('http').Server(app);

app.use(express.json());

app.get('/ping', function(req, res){
    res.send("pong");
});

var channels = [
    {name: "learn", lines:["html", "css", "javascript", "jquery"]},
    {name: "assignment" , lines: ["a1", "a2", "a3"]},
    {name: "students", lines:["vikki", "muneeer"]},
    {name: "mentors", lines:["ikb","gopi"]},
    {name: "trainer", lines:["ikb"]},
    {name: "ideas", lines:["tools for developer fast development like blockly"]},
    {name: "mindmap", lines:["how ajax works", "focus mindmap", "plan", "internship"]},
    {name: "student_vikki", lines:["tamilnadu", "father electrician", "venu reference"]},
    {name: "student_muneer", lines:["2017", "sameer reference", "python"]}
];

app.get('/channels', function(req, res){
    var name = req.query.name;
    console.log("name", name);
    var result = [];
    var channel = {};
    channels.forEach(function(c){
        if(c.name === name){
            channel = c;
        }
    });
    res.json(channel);
});

app.get('/search', function(req, res){
    console.log("term: " , req.query.term);
    var term = req.query.term.toUpperCase();
    console.log("term:", term);
    var result = [];
    channels.forEach(function(channel){
         console.log("channel", channel);
        if(channel.name.toUpperCase().indexOf(term)>-1){
            result.push(channel.name);
        }
    });
    console.log("result:", result);
    res.json(result);
});

app.post('/channels/:name/lines', function(req, res){
    var name = req.params.name;
    console.log("channel name", name);

    var body = req.body;
    console.log("body", body);
    
    var line  = null;
    if(body) {
      line =  body.line;
    }
    else {
        res.json({status: "fail", reason: "please send json body"});
        return;
    }
    console.log("line", line);
    if(!line ){
        res.json({status: "fail", reason: "please send json body line"});
        return;
    }

    var channel = getChannelByName(name);
    if(!channel || !channel.name){
        res.json({"status": "fail", "reason": "no channel with that name"});
    } else {
        console.log("append line ");
        channel.lines.push(line);
        res.json({status: "sucdess", data: channel});    
    }
});

function getChannelByName(name) {
    var channel = {};
    channels.forEach(function(c){
        if(c.name === name){
            channel = c;
        }
    });
    return channel;

}
app.use(express.static("../public"));
const server = http.listen(3000, function() {
    console.log('listening on *:3000');
});