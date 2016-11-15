
var express = require("express");
var app = express();
var fs = require('fs');
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
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

app.get("/delete",function(req,res){  
 var file = require('./data.json');
 file.splice(req.query.id,1);
var str = JSON.stringify(file);
fs.writeFileSync('data.json',str);
	
   res.send("Елемент видалено");
});
	 
	   //console.log(file);
	 
	 // 
	// var str="";
	 // fs.readFile('data.json',str)
	 //  console.log(str);
	   //file = JSON.parse(file);
	   //
	  // var str = JSON.stringify(file);
	   //
	
	   // 
		/*

	/* 
	
	*/
	


app.listen(8080);
console.log("Server is running");