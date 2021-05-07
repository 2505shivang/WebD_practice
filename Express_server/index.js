const express = require('express');
const port = 8000;

const app = express();

app.get('/', function(req,res){
    return res.send('Home');
});


app.listen(port, function(err){
    if(err) { console.log('Error in starting server!',err);return;}

    console.log('Server is Running on port:',port);
});