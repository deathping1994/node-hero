const express = require("express");
const app = express()
const port = 3000

app.listen(port,function(err){
	if (err){
		return console.log('fuckk',err);
	}
	console.log("listening on ",port)
});

app.use(function(req,res,next){
	console.log(req.headers);
	req.name="gaurav";
	next()
});
app.get('/', function(req,res){
	res.json({msg:'hello, this is express',name: req.name});
});

