// use("movie-management");

//? regex
//? expr

// db.movies.find({summary: {$regex: "163 YEAR",$options: "i"}})

// find movies which has spies in its summary

// db.movies.find({ summary: { $regex: "spies", $options: "i" } });

//? $expr

// db.stocks.insertMany([
//   {
//     name: "Rayban Glass",
//     order: 100,
//     stock: 50,
//   },
//   {
//     name: "Jacket",
//     order: 5,
//     stock: 50,
//   },
//   {
//     name: "Jumper",
//     order: 50,
//     stock: 25,
//   },
// ]);

//? find products whose order is greator then stock

// db.stocks.find({$expr: {$gt: ["$order" , "$stock"]}})

//? find products whose order is less then their stocks

// db.stocks.find({$expr: {$lt: ["$order","$stock"]}});

//? find products greater then 20

// db.stocks.find({$expr: {$gt: ["$order", 20]}});

// db.movies.find();

use("movie-management");

// db.friends.insertMany([
//   {
//     name: "Reema Maharjan",
//     favCars: ["Honda", "Tesla", "BYD"],

//     hobbies: [
//       {
//         name: "Racing",
//         frequency: 3,
//       },
//       {
//         name: "Hiking",
//         frequency: 1,
//       },
//       {
//         name: "Chess",
//         frequency: 3,
//       },
//     ],
//   },

//   {
//     name: "Nischal Shrestha",
//     favCars: ["Tesla", "BMW"],

//     hobbies: [
//       {
//         name: "Racing",
//         frequency: 7,
//       },
//       {
//         name: "Hiking",
//         frequency: 3,
//       },
//       {
//         name: "Futsal",
//         frequency: 3,
//       },
//     ],
//   },

//   {
//     name: "Binita KC",
//     favCars: ["Toyota", "Mustang"],

//     hobbies: [
//       {
//         name: "Swimming",
//         frequency: 3,
//       },
//       {
//         name: "Badminton",
//         frequency: 5,
//       },
//       {
//         name: "Reading",
//         frequency: 1,
//       },
//     ],
//   },
// ]);

//? Array operator
//? $all
//? $size
//? $elemMatch

//? $size
//? find whose have "two " favCars

// db.friends.find({ favCars: { $size: 2 } });

// db.friends.find({ hobbies: { $size: 3 } });

// db.friends.find();

//? find friend who has Tesla And BYD as their fav

// db.friends.find({$and: [{favCars: "Tesla"},{favCars: "BYD"}]})
// db.friends.find({ favCars: { $all: ["Tesla", "BYD"] } });

//? elemMatch

// find friend who goes "swimming" more then 4 times
// on a week

// db.friends.find({ "hobbies.name":  "Swimming", "hobbies.frequency":{ $gt: 4 }} );

// find friends who goes racing more then 5 times a week

// db.friends.find({
//   hobbies: { $elemMatch: { name: "Racing", frequency: { $gt: 5 } } },
// });

// db.friends.find()