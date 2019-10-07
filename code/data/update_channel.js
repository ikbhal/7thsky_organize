const mongoose = require('mongoose');
var schema = new mongoose.Schema({ channel: 'string',lines: ['string'] });
var Channel = mongoose.model('Channel', schema);

mongoose.connect('mongodb://localhost:27021/organize', {useNewUrlParser: true})
.catch(function(error){ console.log(error)});

//https://stackoverflow.com/questions/33049707/push-items-into-mongo-array-via-mongoose
var channelId = "5d9a7752ec741c8dc04c6dd9";
var newcodecoach = "ameer";
Channel.findOneAndUpdate(
    { _id: channelId }, 
    { $push: { lines: newcodecoach } },
    function(err, doc) {
        if(err){
            console.log(err);
        } else {
            console.log(doc);//TODO showing old doc, thats fine
        }
    }
);  