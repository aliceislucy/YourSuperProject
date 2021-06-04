const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then((self) => {
    console.log(`Connected to ${self.connection.name} backend server <3 => http://localhost:5000/`);
  })
  .catch((err) => {
    console.log(`An error occurred while connecting to the database...`);
  });
