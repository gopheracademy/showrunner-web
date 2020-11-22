const axios = require('axios');
const https = require('https');
const fs = require('fs');


const PRES_URL = 'https://content.gophercon.com/upload/files';
console.log(PRES_URL);
axios
	.get(PRES_URL, {
		headers: {
			Accept: 'application/json',
		},
	})
	.then(({ data }) =>
		data.forEach(function (image) {
			saveFile(image);

		}

		)
	);

function saveFile(image) {

	const file = fs.createWriteStream(image.name);
	const request = https.get("https://content.gophercon.com" + image.url, function (response) {
		response.pipe(file);
	});
}
