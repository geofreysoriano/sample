const http = require('http');

http.createServer(function (req, res) {
	  res.writeHead(200, {'Content-Type': 'text/html'});
	 res.write('GEOFREY<br/>');	
  	  res.end('Geofrey C. Soriano');
}).listen(3000);