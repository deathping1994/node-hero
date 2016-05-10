const http = require('http')
const port = 3000

const requestHandler = function (req,res){
	console.log(req.url);
	res.end('My first node js server');
}

const server = http.createServer(requestHandler);

server.listen(port,function (err){
	if (err){
		return console.log('something fishy',err);
	}
	console.log('listening on',port);
});