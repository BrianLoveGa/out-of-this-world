const Resturants = require("../model/restApp");
const seedData = require("./seeds.json");


Resturants.deleteMany({})
  .then(() => {
    return Resturants.collection.insertMany(seedData);
  })
  .then(() => {
    console.log(" the slop shops are on-the-line sir ");
    process.exit();
  });



 