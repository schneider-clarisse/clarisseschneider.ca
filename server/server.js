var express 	= require('express'),
	compression = require('compression'),
	app 		= express();

app.use(compression({
						threshold: 512
					}));
app.use(express.static(__dirname + '/../app'));

var server = app.listen(process.env.PORT || 3000, function() {
	var host = server.address().address,
		port = server.address().port;

	console.log('Example app listening at http://%s:%s', host, port)
});
