var http = require("http");
var fs = require("fs");
var parseObj = fs.readFile('dummy.json','utf-8',function(err,data){ //Read from Json file
    console.log(typeof(data));
    var newJSON = [];
    var newObj = {
        "name":"Restaurant CDE",
        "businessHour":"9am-11pm",
        "address":"10, Jalan Chan Sow Lin",
        "location":"Kepong"
    }
    newJSON.push(JSON.parse(data)); //JSON.parse from string type back to object type
    newJSON.push(newObj); //Push new object into JSON
    for (i=0;i<newJSON.length;i++){
        console.log("Showing new JSON: " + newJSON[i].name + newJSON[i].address);
    };
    var writeJSON = JSON.stringify(newJSON); //Stringify it before writing
    fs.writeFile('newJson.json',writeJSON,function(err,data){ //Export to new Json file
        if (err) throw err;
        console.log("New json written");
    })
});

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

