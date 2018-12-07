var express = require("express");
var app = express();
var router = express.Router();
var path = __dirname + '/views/';

router.use(function(req,res,next){
    console.log("/"+ req.method);
    next();
});

router.get("/",function(req,res){
    res.sendFile(path + "index.html");
});

app.use("/",router);

app.listen(8080,function(){
    console.log("Port 8080")
})