// yahi se mongo db ka link judega

const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect("mongodb://localhost:27017/Blogging", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((data) => {
      console.log(`Server is connected to the database`);
    })
    .catch((err) => {
      console.log(`the following error occured ${err}`);
    });
};
module.exports = connectDatabase;
