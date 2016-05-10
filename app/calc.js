var sum = function(arr){
	x =0;
	for (var i= 0;i<arr.length;i++)
	{
		x+=arr[i];
		console.log(x);
	}
	return x;
}

module.exports.sum = sum;