const fs = require('fs');

function cat(file) {
	fs.readFile(file,'utf-8', (err, data) => {
		if (err) throw err;
		console.log(data);
	});
}

module.exports = cat;