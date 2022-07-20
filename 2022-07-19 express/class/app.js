const fs = require('node:fs'),
	url  = require('node:url'),
	path = require('node:path'),
	http = require('node:http');

// https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types
const MIME_TYPES = {
	'.ico': 'image/x-icon',
	'.html': 'text/html',
	'.js': 'text/javascript',
	'.json': 'application/json',
	'.css': 'text/css',
	'.png': 'image/png',
	'.jpg': 'image/jpeg',
	'.jpeg': 'image/jpeg',
	'.wav': 'audio/wav',
	'.mp3': 'audio/mpeg',
	'.svg': 'image/svg+xml',
	'.pdf': 'application/pdf',
	'.doc': 'application/msword',
	'.eot': 'appliaction/vnd.ms-fontobject',
	'.ttf': 'aplication/font-sfnt'
};

const PUBLIC_PATH = './public';

http.createServer(function(request, response) {
	console.log(`Requested URL: "${request.url}"`);
// padarome saugu file Path 30-33 eilutes
// gaunam failo gabaliuka kas yra po sleso /
	let filePath = request.url.slice(1);
    // patikrinu ar jis netuscias, jei jis neruscias naudoju ji, jei jis yra tuscias pagal nutilejima index.html
		filePath = filePath !== '' ? filePath : 'index.html';
        // isaprsinam kad nebutu domenu ir pan.
		filePath = url.parse(filePath).pathname;
        // joininame su path
        // TADA GAUNAME LOCALU SAUGU BE GALIMYBIU KA+KUR NUEITI
		filePath = path.join(PUBLIC_PATH, path.normalize(filePath));

	console.log(`Requested file path: ${filePath}`);
// patikrinam ar path yra
	fs.lstat(filePath, function(err, stats) {
		if (err) {
			console.log(err.message);

			response.statusCode = 404;

			return response.end(`File "${request.url}" not found!`);
		}

		if (stats.isDirectory()) {
			response.statusCode = 403;

			return response.end(`"${request.url}" is forbiden!`);
		}

		let ext = path.parse(filePath).ext;
		
		response.setHeader('Content-Type', MIME_TYPES[ext] || 'application/octet-stream');

		let stream = fs.createReadStream(filePath);

		return stream.pipe(response);
	});
}).on('listening', function() {
	console.log(`Started at ${this.address().port} port`);
}).listen(3030);
// jei }).listen(3030);
// localhost:3030
// nueiti i user.json rasom http://localhost:3030/user.json