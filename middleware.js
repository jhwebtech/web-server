// Use module exports to expose middleware
var middleware = {
	requireAuthentication: function (req, res, next) {
		console.log('Private route hit!');
		next();
	},
	logger: function (req, res, next){
		// new Date().toString()
		var date = new Date().toString();
		console.log('Request: ' + req.method + ' ' + req.originalUrl + ' ' + date);
		next();
	}
};

module.exports = middleware;