const express = require('express');
const port = 8000;
const db = require('./config/mongoose');
const app = express();


app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.urlencoded());
app.use(express.static('./assets'));

app.get('/', function(req,res){
    return res.send('Home');
});

app.get('/profile', function(req,res) {
    return res.send('Profile');
});

app.listen(port, function(err){
    if(err) { console.log('Error in starting server!',err);return;}

    console.log('Server is Running on port:',port);
});