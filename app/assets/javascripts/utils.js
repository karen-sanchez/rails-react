// It looks like we are going to need a helper method to format amount strings, we can implement a simple string formatter and make it accesible to all of our jsx files. 
var amountFormat = function(amount) {
	return "$" + Number(amount).toLocaleString();
};