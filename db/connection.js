const mongoose = require("mongoose");
mongoose.connect(
  "mongodb://localhost/resturants",
  { useUnifiedTopology: true },
  
  () => {
    console.log("Now connected!!! Warp Speed Engage !!!");
  }
);

mongoose.Promise = Promise;
module.exports = mongoose;