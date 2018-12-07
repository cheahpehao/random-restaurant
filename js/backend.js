var http = require("http");
var fs = require("fs");
var obj = JSON.parse(fs.readFileSync('dummy.json','utf-8'));

var server = http.createServer(function(req,res){
    if(req.url==='/home' || red.url === '/'){
        res.writeHead(200,{'content-type':'text/html'});
        fs.createReadStream(__dirname + 'index.htm').pipe(res);
    }
    else if (req.url ==='/displayJSON'){
        res.writeHead(200,{"Content-type":"application/json"});
        res.end(JSON.stringify(obj));
    }
    
}).listen(8080,'127.0.0.1');

console.log("Running at 127.0.0.1:8080");

