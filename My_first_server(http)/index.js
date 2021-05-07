const http = require('http');
const port = 8000;
const fs = require('fs');
const { profile } = require('console');

function requestHandler(req,res){
    res.writeHead(200, {'content-type': 'text/html'});
    let filePath;

    switch(req.url){
        case '/' : filePath = './index.html'
        break;
        case '/profile' : filePath = './profile.html'
        break;
        default :  filePath = './404.html';
    }

fs.readFile(filePath, function(err, data){
    if(err){
        console.log('err in filePath');
        returnres.end();
    }

    return res.end(data);
});

    return;

}

const server = http.createServer(requestHandler);

server.listen(port, function(err){
    if(err){
        console.log(err);
        return;
    }

    console.log('Server is running on Port:', port);
});
