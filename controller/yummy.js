// express
const express = require("express");
const router = express.Router();

// // lodash for random background fun
// const lolo = require("lodash");

// model
const Resturants = require("../model/restApp");


// to catch no name error

// try {
//     const result = await name.save();
//     console.log(result);
// } catch (err) {
//     console.log(err.message);
//     alert("Name field must be filled in");
// }

// post route

router.post("/", (req,res)=>{
  Resturants.create(req.body).then(rests =>{
    res.redirect("/");
  });
});



/// base page of all resturant titles (R in crud)

router.get("/", (req, res) => {
    Resturants.find({})
      .then(rests => {
        res.render("index", {rests} );
      })
      .catch(err => console.error(err));
  });

  
// page to add a new tasty resturant (C in crud)

router.get("/new", (req, res) => {
    res.render("new",);
  });



// see each place on its own page (R in crud)
router.get("/:id", (req, res) => {
  Resturants.findOne({ _id: req.params.id })
  .then(rests => {

  res.render("show",rests);
      })
      .catch(err => console.error(err));
  });



// edit page show up (U in crud)

router.get("/:id/edit", (req, res) => {
  Resturants.findOne({ _id: req.params.id })
  .then(rests => {
        res.render("edit", rests); 
      })
      .catch(err => 
        console.error(err));
  });


// edit work (U in crud)

router.put("/:id", (req, res) => {
    Resturants.findOneAndUpdate({ _id: req.params.id }, req.body).then( goHome => {
      res.redirect("/");
    });
  });


// delete router (D in crud)
router.delete("/:id", (req, res) => {
  Resturants.findOneAndDelete({ _id: req.params.id }).then(() => {
    res.redirect("/");
  });
});




/// all must be above this line
module.exports = router;


/// nope nothing below besides grave yard




/// tried random background at global didn't change after first random - it's working when repeated for each page - tested since new and main still working... .... although now my info isn't showing up and edit page is dead... hmmm... also can't delete - likely due to info not passing thru - only names on main page - no info anywhere else ... wha  happened ?

  // const stars3 = [  "url(https://c.pxhere.com/photos/1a/9d/stars_background_blue_photoshop_color_space_sky_dark-610854.jpg!d)",
  // "url(https://cdn5.vectorstock.com/i/1000x1000/43/69/pattern-with-pink-stars-on-dark-sky-background-vector-24544369.jpg)",
  // "url(https://cdn.cnn.com/cnnnext/dam/assets/150103074330-hubble-space-background-2-full-169.jpg)"]
 
  // const randoColor3 = lolo.sample(stars3);