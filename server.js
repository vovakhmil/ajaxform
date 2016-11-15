
var express = require("express");
var app = express();
var fs = require('fs');
app.use(express.static(__dirname)) // вСТАНОВЛЕННЯ каталогу для статичного контенту

app.get("/",function(req,res){
res.sendFile(__dirname+"/index.html");
});
app.get("/form",function(req,res){
res.sendFile(__dirname+"/form.html");
});
app.get("/list",function(req,res){
res.sendFile(__dirname+"/data.json");
});

app.get("/formget",function(req,res){
	console.log(req.query)
var file = require('./data.json');
console.log(file);
file.push(req.query);
var str = JSON.stringify(file);
fs.writeFileSync('data.json',str)
res.send("Дані збережено на сервер")
});


app.listen(8080);
console.log("Server is running");