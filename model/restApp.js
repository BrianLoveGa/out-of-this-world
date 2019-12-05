const mongoose = require("../db/connection");

const ResturantsSchema = new mongoose.Schema({
  name: String, 
  owner: String,
  type: String,
  capacity: Number
    
});

const Resturants = mongoose.model("Resturants", ResturantsSchema);



module.exports = Resturants;


/// validation bonus ...

// const badResturants = new Resturants ({
//     name: null,
//     owner: null,
//     type: null,
//     capacity: String
// });

// var error = badResturants.validateSync();
// assert.equal(error.errors['name'].message,
// '`must include a resturant name');
// assert.equal(error.errors['owner'].message,
// '`must include an owners name');
// assert.equal(error.errors['type'].message,
// '`must include some food');
// assert.equal(error.errors['capacity'].message,
// '`must be a number');


/// why do 3 pages say type it like this but it crashes every time... 
    // type: String,
    // required: true,
    // minlength: 4,
    // maxlength: 200,
/// why ?????????????????? ...  crashes every time ... 


