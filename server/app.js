require("dotenv").config();
require("./config/dbConnection");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const app = express();
const _DEV_MODE = false;



//// CORS SETUP ////

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    // white list of clients, allowing specific domains to communicate with api.
    credentials: true,
    // Allows client to send cookies.
  })
);



//// SESSION ////

app.use(
  session({
    store: MongoStore.create({ mongoUrl: process.env.MONGODB_URI }), // Persist session in database.
    secret: process.env.SESSION_SECRET,
    cookie: {
      maxAge: 24 * 60 * 60 * 1000,
    },
    resave: true,
    saveUninitialized: true,
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



//// DEV MODE ////

// This is to allow the dev to be logged in automtically to test the features
// available only when logged in without having to log in each time

if (_DEV_MODE) {
  const User = require("./models/User");

  app.use((req, res, next) => {
    User.findOne()
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



//// ROUTERS ////

//app.use("/api/auth", require("./routes/auth"));
// app.use("/api/users", require("./routes/users"));
// app.use("/api/products", require("./routes/products"));
// app.use("/api/carts", require("./routes/carts"));
// app.use("/api/orders", require("./routes/orders"));
// app.use("/api/ingredients", require("./routes/ingredients"));
// app.use("/api/comments", require("./routes/comments"));



//// ERROR HANDLER ////

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

app.use((err, req, res, next) => {
  if (process.env.NODE_ENV !== "production") {
    console.error(err);
  }
  console.log("An error occured");
  res.status(err.status || 500);
  if (!res.headersSent) {
    // A limited amount of information sent in production
    if (process.env.NODE_ENV === "production") {
      res.json(err);
    } else {
      res.json(
        JSON.parse(JSON.stringify(err, Object.getOwnPropertyNames(err)))
      );
    }
  }
});



module.exports = app;
