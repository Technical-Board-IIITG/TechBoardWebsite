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

app.get('/landing', (req, res) => {
	res.render('./Design_landing/index.ejs');
});

app.get('/landing/facilities', (req, res) => {
	res.render('./Design_landing/facilities/facilities.ejs');
});

app.get('/landing/events', (req, res) => {
	res.render('./Design_landing/events/events.ejs');
});

app.get('/landing/initiatives', (req, res) => {
	res.render('./Design_landing/initiatives/initiatives.ejs');
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

app.get('/xclub/events', (req, res) => {
	res.render('./Design_X_Club/events/events.ejs');
});

app.get('/xclub/projects', (req, res) => {
	res.render('./Design_X_Club/projects/projects.ejs');
});

app.listen(process.env.PORT || port, () => {
	console.log("Connected to port " + port);
});
