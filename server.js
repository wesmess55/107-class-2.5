var express = require('express');
var server = express();

var ejs = require('ejs');
server.set('views',__dirname+ "/public");
server.engine('html', ejs.renderFile);
server.set('view engine',ejs);

server.get('/',function(req, res){
    res.send("hello there!");
});


server.get('/about',function(req,res){
    res.render('about.html');
});

server.get('/soon',function(req,res){
    res.send("<h1 style= 'weight:bold;color:grey;'>Page Coming Soon<h1>");
});

server.get('/contact',function(req,res){
    res.send("Page under construction...");
});

server.post('api/item', function(req,res){

});
server.listen(8080, function(){
    console.log("Server running at http://localhost:8080");
});
