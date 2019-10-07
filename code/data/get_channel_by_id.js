const mongoose = require('mongoose');
var schema = new mongoose.Schema({ channel: 'string',lines: ['string'] });
var Channel = mongoose.model('Channel', schema);

mongoose.connect('mongodb://localhost:27021/organize', {useNewUrlParser: true})
.catch(function(error){ console.log(error)});

var channelId = "5d9a7752ec741c8dc04c6dd9";
Channel.findById(channelId, function(err, doc){
    if(err){
        console.log(err);
    } else {
        console.log("resutl", doc);
    }
});