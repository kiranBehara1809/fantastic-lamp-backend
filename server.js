require("dotenv").config();

const express = require("express");
const createError = require("http-errors");
const jwt = require("jsonwebtoken");
const cors = require("cors");


const app = express();

app.use(
  cors({
    // origin: "*",
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Initialize DB
require("./initDB")();

const ProductRoute = require("./Routes/Product.route");
const UserRoute = require("./Routes/User.route");
const MasterRoute = require("./Routes/Masters.route");
const AuthRoute = require("./Routes/Auth.route");
const { API_VERSION } = require("./constants/general");


app.use(`${API_VERSION}/products`, authenticateToken, ProductRoute);
app.use(`${API_VERSION}/users`, authenticateToken, UserRoute);
app.use(`${API_VERSION}/masters`, authenticateToken, MasterRoute);
app.use(`${API_VERSION}/auth`, AuthRoute);

//404 handler and pass to error handler
app.use((req, res, next) => {
  next(createError(404, "Not found / End Point not Found"));
});

//Error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    error: {
      status: err.status || 500,
      message: err.message,
    },
  });
});

function authenticateToken(req, res, next) {
  // next();
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token === null || token === undefined) {
    next(createError(401, "Token not available"));
    return
  }
  jwt.verify(token, process.env.ACCESS_TOKEN_S_KEY, (err, currentUser) => {
    if (err) {
      next(createError(403, "TVA"));
      return
    } else {
      req.currentLoggedInUser = currentUser;
      next();
    }
  });
}

const PORT = process.env.PORT || 8888;

app.listen(PORT, () => {
  console.log("Server started on port " + PORT + "...");
});
