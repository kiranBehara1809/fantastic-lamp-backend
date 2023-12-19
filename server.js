const express = require('express');
const createError = require('http-errors');
const dotenv = require('dotenv').config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Initialize DB
require('./initDB')();

const ProductRoute = require('./Routes/Product.route');
const UserRoute = require('./Routes/User.route');
const AuthRoute = require('./Routes/Auth.route');
const { API_VERSION } = require('./constants/general');


app.use(`${API_VERSION}/products`, ProductRoute);
app.use(`${API_VERSION}/users`, UserRoute);
app.use(`${API_VERSION}/auth`, AuthRoute);


//404 handler and pass to error handler
app.use((req, res, next) => {
  next(createError(404, 'Not found'));
});

//Error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    error: {
      status: err.status || 500,
      message: err.message
    }
  });
});

const PORT = process.env.PORT || 8888;

app.listen(PORT, () => {
  console.log('Server started on port ' + PORT + '...');
});
