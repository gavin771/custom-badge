const express = require('express');
const expressSanitizer = require('express-sanitizer');
const app = express()
const badge = require('gh-badges')

app.use(expressSanitizer());

const formatData = ({
	title = 'Default Title',
	color = 'green',
	value = 'Default Value',
	template= 'flat-square'
}) => {
	return {
		text: [` ${title} `, ` ${value} `],
		colorscheme: color, //red/orange/green
		template: template,
	}
};

app.get('/', (req, res) => {
	res.send("Custom Badge Creator")
})

// /generate?title=Label%20Title&color=green&value=123&template=flat-square
app.get('/generate', (req, res) => {

	badge(formatData(req.query), (svg, err) => {
		var response;

		(err === undefined) ? response = svg: reponse = err;

		//xmlns:xlink="http://www.w3.org/1999/xlink"
		res.setHeader('Content-Type', 'image/svg+xml');
		res.send(response);
	})
})

app.listen(process.env.PORT || 4004)