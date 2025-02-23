const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
require('dotenv').config()
const mysql = require('mysql2')
const cors = require('cors')
// Import Routes
const HelloRoute = require('./router/hello/hello.route.js');
const UserRoute = require('./router/user/user.route.js');

const app = express();

const corsOption = {
    origin:'http://localhost:3000',
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
}

app.use(cors(corsOption))
app.use(morgan('dev'));
app.use(bodyParser.json());
// Routes
app.use('/api/hello', HelloRoute);
app.use('/api/user', UserRoute);
// Start Server
app.listen(8080, () => {
    console.log("Server started on port 8080");
});







