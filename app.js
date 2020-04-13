var express = require('express');
var app = express();

//axios module for making HTTP requests to API endpoints
var axios = require('axios');

var bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//Importing Mongoose for Database Connection
const mongoose = require('mongoose');

app.use(express.static("public"));

//Port on which this website is hosted
const port = 5000;

//MongoDB URI
const mongoURI = 'mongodb://localhost/techboard';

//Connecting with MongoDB
mongoose.connect(mongoURI, {useNewUrlParser:true});

//importing Models from ./models/ directory
const demoTable = require('./models/Demo.js');

//importing API controller: This will contain all the API Endpoints
var API = require('./controllers/API.js');

//Using the imported APIs
app.use(API);

//Creating axios instance with baseURL for relative referencing of APIs
var local = axios.create({baseURL: 'http://localhost:5000'});

/*
You have to make similar routes like /demo during the phase 3 (integration) where we fetch json response from api as described below, and render ./views along with the responseData. Here we use axios' local instance for fetching data from API.
*/

//demo route displaying the fetched data from the /api/demo API endpoint to ./views/demo.ejs
app.get('/demo', async (req, res) => {

	//data variable for storing JSON response from the /api/demo endpoint
	var jsonData;
	
	//axios is used for fetching JSON response
	await local({
		method: "get",
		url: "/api/demo/",
	}).then(responseData => jsonData = responseData.data);

	//Rendering demo.ejs with response JSON
	res.render('demo.ejs', {response:jsonData[0]});
});

//--------------------------------------------------------------

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
