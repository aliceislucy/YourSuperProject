require("dotenv").config();
require("./config/dbConnection");
const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const session = require("express-session");
const mongoose = require("mongoose");
const MongoStore = require("connect-mongo");
const app = express();
const _DEV_MODE = false;



//// ROUTERS ////

// app.use("/api/auth", require("./routes/auth"));
// app.use("/api/users", require("./routes/users"));
// app.use("/api/products", require("./routes/products"));
// app.use("/api/carts", require("./routes/carts"));
// app.use("/api/orders", require("./routes/orders"));
// app.use("/api/ingredients", require("./routes/ingredients"));
// app.use("/api/comments", require("./routes/comments"));



//// CORS SETUP ////

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    // white list of clients, allowing specific domains to communicate with api.
    credentials: true,
    // Allows client to send cookies.
  })
);



//// GENERAL SETUP ////

app.use(logger("dev"));
// Shows us the the request methods (get,post...) status and url in the console.
app.use(express.json());
// Allows us to access data sent as json through req.body
app.use(express.urlencoded({ extended: false }));
// Alows us to access data sent as urlencoded through req.body
app.use(cookieParser());
// Allows us to access cookies through req.cookies
app.use(express.static(path.join(__dirname, "public")));
// Define public folder to serve static assets, imgs, etc..



//// SESSION ////

app.use(
  session({
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
    // Persist the session in the Database
    saveUninitialized: true,
    resave: true,
    secret: process.env.SESSION_SECRET,
  })
);



//// DEV MODE ////

// This is to allow the dev to be logged in automtically to test the features
// available only when logged in without having to log in each time

if (_DEV_MODE) {
  const User = require("./models/User");

  app.use((req, res, next) => {
    User.findOne({})
      // ^ Get a user from the DB (doesnt matter which)
      .then((userDocument) => {
        req.session.currentUser = userDocument._id;
        // ^ Set that user as the loggedin user by putting him in the session.
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        // ^ will be called no matter if the promise failed or succeeded
        // so we can safely call our next function here.
        next();
      });
  });
}



//// ERROR HANDLER ////

//AUTO SETUP EXPRESS

app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});
//--------------------------------------------------------------------
// FRANCK

// Middleware that handles a ressource that wasn't found.
app.use((req, res, next) => {
  res.status(404).json({
    message: `The ressource you're trying to request doesn't exist. Method: ${req.method} path: ${req.originalUrl}`,
  });
});

if (process.env.NODE_ENV === "production") {
  app.use("*", (req, res, next) => {
    // If no routes match, send them the React HTML.
    res.sendFile(__dirname + "/public/index.html");
  });
}

// Middleware that handles errors, as soon as you pass some data to your next() function
// eg: next("toto"). You will end up in this middleware function.

app.use((error, req, res, next) => {
  console.log(error);
  error.status = error.status || 500;
  res.json(error);
});


module.exports = app;
