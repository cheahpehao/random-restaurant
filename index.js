var express = require("express");
var app = express();
var router = express.Router();
var path = __dirname + '/views/';
var staticPath = require('path');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended:false});
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

//Get restaurant information from form
router.post("/submit",urlencodedParser,function(req,res){
    console.log(typeof(req.body));
    console.log(req.body);
    res.sendFile(path+"success.html");
    var fs = require('fs');
    var obj = fs.readFile('js/dummy.json',function(err,data){
        var newJSON = JSON.parse(data);
        newJSON.push(req.body)
        
        fs.writeFile('js/dummy.json',JSON.stringify(newJSON),function(err,data){
            if (err) throw err;
            console.log('successfully write json');
        })
    })
    
    
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
app.use(bodyParser.json());
app.use(express.static(staticPath.join(__dirname,'public')));   
app.listen(8080,function(){
    console.log("Port 8080")
})