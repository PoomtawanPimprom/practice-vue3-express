const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
require('dotenv').config()
const cors = require('cors')
// Import Routes
const HelloRoute = require('./router/hello/hello.route.js');
const UserRoute = require('./router/user/user.route.js');
const RoleRoute = require('./router/role/role.route.js')
const ProductRoute = require('./router/product/product.route.js')
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
app.use('/api/role', RoleRoute);
app.use('/api/product', ProductRoute);
// Start Server
app.listen(8080, () => {
    console.log("Server started on port 8080");
});







