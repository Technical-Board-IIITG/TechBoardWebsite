var express = require('express');
var app = express();

app.use(express.static("public"));

const port = 5000;

app.get('/', (req, res) => {
	var routes = [];
	app._router.stack.forEach(function(r){
		if (r.route && r.route.path){
			routes.push(r.route);
		}
	})
	res.render("routes.ejs", {routes: routes});
});

app.get('/xclub', (req, res) => {
	res.render('./Design_X_Club/index.ejs');
});

app.get('/xclub/hof', (req, res) => {
	res.render('./Design_X_Club/hall_of_fame/hall_of_fame.ejs');
});

app.get('/xclub/gallery', (req, res) => {
	res.render('./Design_X_Club/gallery/gallery.ejs');
});

app.get('/xclub/gallery/archive', (req, res) => {
	res.render('./Design_X_Club/gallery/index.ejs');
});

app.get('/xclub/resources', (req, res) => {
	res.render('./Design_X_Club/resouces/resourse.ejs');
});

app.listen(port, () => {
	console.log("Connected to port " + port);
});
