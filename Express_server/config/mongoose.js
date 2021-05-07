const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/practicedb');

const db = mongoose.connection;

db.on('error', console.error.bind(console,'Error in connecting DB!'));
db.once('open', function(){
    console.log('Connected to DB!!!');
});

module.exports = db;