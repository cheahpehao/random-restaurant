var express = require("express");
var app = express();
var router = express.Router();
var path = __dirname + '/views/';
var staticPath = require('path');

router.use(function(req,res,next){
    console.log("/"+ req.method);
    next();
});

router.get("/",function(req,res){
    res.sendFile(path + "index.html");
});

router.get("/add",function(req,res){
    res.sendFile(path+"addRestaurant.html");
})
router.get('/random',function(req,res){
    res.sendFile(path+"randomRestaurant.html");
})
router.get("/restaurantJSON",function(req,res){
    var fs = require('fs');
    var obj = JSON.parse(fs.readFileSync('js/dummy.json','utf-8'));
    res.writeHead(200,{"Content-type":"application/json"});
    res.end(JSON.stringify(obj));
})

app.use("/",router);
app.use(express.static(staticPath.join(__dirname,'public')));    
app.listen(8080,function(){
    console.log("Port 8080")
})