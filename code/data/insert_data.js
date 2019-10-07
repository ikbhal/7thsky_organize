const mongoose = require('mongoose');
var schema = new mongoose.Schema({ channel: 'string',lines: ['string'] });
var Channel = mongoose.model('Channel', schema);

mongoose.connect('mongodb://localhost:27021/organize', {useNewUrlParser: true})
.catch(function(error){ console.log(error)});

// crate video
var channels = [
{
channel : "students",
lines: ["vikki", "muneer"]
},
{
channel: "codecoach",
lines: ["ikb", "gopi", "venu"]
},
{
channel: "startups",
lines:["codelabs marvari, hsr layout"]
}
];
console.log(channels);

Channel.insertMany(channels, function(error, docs) {
    console.log("db return : " + docs);
});
