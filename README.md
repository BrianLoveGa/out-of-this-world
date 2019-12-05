[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly)

---
# YUM!

For Homework you will be writing a node application to practice using Express and Mongoose. Your task: create an app that tracks and stores Restaurants.

## Setup

Fork and clone this repo. Build out your file structure following MVC and install all the necessary packages from npm.

## Express

Build out an app using Express with routes that you can view in your browser and forms that manipulate your data with full CRUD.

Your app should have one resource: Restaurants.

| Name | Type | Description |
| --- | --- | --- |
| name | String | The name of the restaurant | = 3-45 characters only letters
| owner | String | The name of the owner | = 3-45 characters only letters
| type | String | The type of food the restaurant serves | = 5-80 characters
| capacity | Number | The max capacity of the restaurant | = num between 15 & 500

## Bonus 1

Review the documentation on [Schemas](http://mongoosejs.com/docs/guide.html) and [Validation](http://mongoosejs.com/docs/validation.html) in Mongoose and add to your schema definition. Are there default values you could set in the schema? Are there properties you could validate (make required, set a min or max for, etc)?


yes but can't seem to get it yet...


## Bonus 2: Subdocuments

In Mongo, you can create nested resources using [Subdocuments](http://mongoosejs.com/docs/subdocs.html). Add a menu property to your Restaurant schema that contains an array of MenuItem documents.


``var childSchema = new Schema({ name: 'string' });

var parentSchema = new Schema({
  // Array of subdocuments
  children: [childSchema],
  // Single nested subdocuments. Caveat: single nested subdocs only work
  // in mongoose >= 4.2.0
  child: childSchema
});``

``var Parent = mongoose.model('Parent', parentSchema);
var parent = new Parent({ children: [{ name: 'Matt' }, { name: 'Sarah' }] })
parent.children[0].name = 'Matthew';

// `parent.children[0].save()` is a no-op, it triggers middleware but
// does **not** actually save the subdocument. You need to save the parent
// doc.
parent.save(callback);``

``childSchema.pre('save', function (next) {
  if ('invalid' == this.name) {
    return next(new Error('#sadpanda'));
  }
  next();
});

var parent = new Parent({ children: [{ name: 'invalid' }] });
parent.save(function (err) {
  console.log(err.message) // #sadpanda
});

const schema = new Schema({
  level1: new Schema({
    level2: new Schema({
      test: String
    })
  })
});
const Model = mongoose.model('Test', schema);

const doc = new Model({ level1: { level2: 'test' } });

doc.level1.level2.parent() === doc; // false
doc.level1.level2.parent() === doc.level1; // true
doc.level1.level2.ownerDocument() === doc; // true