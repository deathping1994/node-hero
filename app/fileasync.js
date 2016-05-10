async = require("async");
fs = require("fs")

async.parallel(['calc.js','index.js'], fs.stat.map, function (err, results) {  
    if (err){
    console.log(err);
    }
    else{
    	console.log(results);
    }
});

