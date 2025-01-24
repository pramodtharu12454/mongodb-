use("movie-management");

// db.users.insertMany([
//   {
//     name: "Aayush",
//     marks: [21, 25, 75, 30, 11],
//     hobbies: [
//       {
//         name: "Biking",
//         frequency: 7,
//       },
//       {
//         name: "Trekking",
//         frequency: 1,
//       },
//     ],
//   },
//   {
//     name: "Ashesh",
//     marks: [20, 25, 35, 45, 60],
//     hobbies: [
//       {
//         name: "Hiking",
//         frequency: 6,
//       },
//       {
//         name: "Cycling",
//         frequency: 3,
//       },
//     ],
//   },

//   {
//     name: "Udaya",
//     marks: [55, 61, 68, 90, 32],
//     hobbies: [
//       {
//         name: "Reading",
//         frequency: 2,
//       },
//       {
//         name: "Boating",
//         frequency: 5,
//       },
//     ],
//   },
// ]);

// ? remove marks less than 32 from aayush

// db.users.updateMany(
//   { name: "Aayush" },
//   {
//     $pull: {
//       marks: { $lt: 32 },
//     },
//   }
// );

// db.users.updateMany(
//   { name: "Aayush" },
//   {
//     $pull: {
//       hobbies: { frequency: { $lt: 5 } },
//     },
//   }

// ? EXTRA section

// );
// ? change marks 25 to 50 for ashesh

// db.users.updateOne(
//   { name: "Ashesh", marks: 20 },
//   {
//     $set: {
//       "marks.$": 25,
//     },
//   }
// );
// ? change hobby from hikking to trekking for Udaya

// db.users.updateMany(
//   { name: "Udaya", "hobbies.name": "Boating" },
//   {
//     $set: {
//       "hobbies.$.name": "Singing",
//     },
//   }
// );

//  ? set frequency of all hobies to 10 for udaya

// db.users.updateMany(
//   { name: "Udaya" },
//   {
//     $set: {
//       "hobbies.$[].frequency": 10,
//     },
//   }
// );

// ? increase marks of Ashesh by 10

// db.users.updateMany(
//   { name: "Ashesh" },
//   {
//     $inc: {
//       "marks.$[]": 10,
//     },
//   }
// );

// db.users.updateMany(
//   { name: "Udaya", marks: 68 },
//   {
//     $inc: {
//       "marks.$": 10,
//     },
//   }
// );

// ? change "Reading" to "movies " for Udaya

// db.users.updateMany(
//   { name: "Udaya", "hobbies.name": "movies" },
//   {
//     $set: {
//       "hobbies.$.name": "Reading",
//       "hobbies.$.frequency": 99,
//     },
//   }
// );

// db.users.updateMany(
//   { name: "Udaya" },
//   {
//     $push: {
//     "hobbies.$[]": { game: "E-sport" },
//     },
//   }
// );

// db.users.updateOne(
//   { name: "Udaya" },
//   {
//     $set: {
//       "hobbies.$[].frequency": 100,
//     },
//   }
// );

// db.users.updateMany(
//   { name: "Ashesh" },
//   {
//     $inc: {
//       "marks.$[item]": 10,
//     },
//   },
//   {
//     arrayFilters: [{ item: { $lt: 55 } }],
//   }
// );

// db.users.updateOne(
//   { name: "Aayush" },
//   {
//     $set: {
//       "hobbies.$[item].frequency": 20,
//     },
//   },
//   {
//     arrayFilters: [{ "item.frequency": { $lt: 5 } }],
//   }
// );


// db.users.find();


// TODO : upsert
