const mongoose = require('mongoose');
var schema = new mongoose.Schema({ channel: 'string',lines: ['string'] });
var Channel = mongoose.model('Channel', schema);

mongoose.connect('mongodb://localhost:27021/organize', {useNewUrlParser: true})
.catch(function(error){ console.log(error)});

//TODO sort by channel name ascending order
// TODO only return channel name, channel id
var channels = [];
Channel.find({}).sort('channel').exec(function(err, docs){
    console.log("all channel", docs);

    docs.forEach(function(doc, index){
        channels.push({_id: doc._id, channel: doc.channel});
    });
    console.log("result", channels);
});