use("movie-management");

// db.students.insertMany([
//   {
//     name: "Udaya",
//     age: 20,
//     hobbies: ["Football", "Cycling", "Coding"],
//   },

//   {
//     name: "Gobinda",
//     age: 50,
//     hobbies: ["Football", "Swimming", "Hiking"],
//   },

//   {
//     name: "Subodh",
//     age: 9,
//     hobbies: ["Cricket", "Gossips", "Trekking"],
//   },

//   {
//     name: "Nitesh",
//     age: 35,
//     hobbies: ["Football", "E-Gaming", "Music"],
//   },
// ]);
// db.students.find();

//  ? update gobinda age 30

// db.students.updateOne(
//   { name: " Gobinda" },
//   {
//     $set: {
//       age: 30,
//     },
//   }
// );

// db.students.find();

//  update name gobind to balgobind

// db.students.updateOne(
//   { name: "balgobind" },
//   {
//     $set: {
//       name: "gobind",
//     },
//   }
// );

// db.students.find();

// ? from id change

// db.students.updateOne(
//   {
//     _id: ObjectId("67838ecb9d11bb621ed73e7b"),
//   },
//   {
//     $set: {
//       name: "bal gobinda",
//       age: 22,
//     },
//   }
// );

// db.students.find();

// ? update age of all students by 10 years
// ? $inc
// db.students.updateMany(
//   {},
//   {
//     $inc: {
//       age: 10,
//     },
//   }
// );

// ? decrease age of student by 5

// db.students.updateMany(
//   {},
//   {
//     $inc: {
//       age: -5,
//     },
//   }
// );

//?  increase age of student by 2 who are already 30 or older

// db.students.updateMany(
//   { age: { $gte: 30 } },
//   {
// $inc: { age: 2 },
//   }
// );

// ? $mul
// ? multiply age subodh by 3

// db.students.updateOne(
//   { name: "Subodh" },
//   {
//     $mul: {
//       age: 3,
//     },
//   }
// );
// db.students.find();

// ? divide age of Nitesh by 2

// db.students.updateMany(
//   { name: "Nitesh" },
//   {
//     $mul: {
//       age: 1 / 2,
//     },
//   }
// );

//  ? remove field
// ? $unset

// db.students.updateMany(
//   { name: "Nitesh" },
//   {
//     $unset: {
//       age: "",
//     },
//   }
// );

// db.students.find();

// ? $rename
// ? change "name" field to "FirstName"

// db.students.update(
//   { name: "Nitesh" },
//   {
//     $rename: {
//       name: "firstName",
//     },
//   }
// );

// db.students.find();

// ? array operator
// ? add "singing"as hobbies to udaya
// ? $push

// db.students.updateMany(
//   { name: "Udaya" },
//   {
//     $push: {
//       hobbies: "Dancing",
//     },
//   }
// );

// db.students.find();

// ? $pop
// ? removes last item from aaray
// ? 1 = remove last item
//  ? -1 = remove first item

// db.students.updateMany(
//   { name: "Udaya" },
//   {
//     $pop: {
//       hobbies: -1,
//     },
//   }
// );

// db.students.find();

// ? $addToSet

// db.students.updateMany(
//   { name: "Udaya" },
//   {
//     $addToSet: {
//       hobbies: "Dancing",
//     },
//   }
// );

// db.students.find();

// ? update multiple hobbies

// db.students.updateMany(
//   { name: "Subodh" },
//   {
//     $push: {
//       hobbies: { $each: ["badminton", "tennis", "running"] },
//     },
//   }
// );

// db.students.find();

// db.students.updateMany(
//   { name: "Subodh" },
//   {
//     $addToSet: {
//       hobbies: { $each: ["football", "tennis", "running"] },
//     },
//   }
// );

// db.students.find();

// ? increase of gobinda by 10
// db.students.updateMany(
//   { name: "Gobinda" },
//   {
//     $inc: {
//       age: 10,
//     },
//   }
// );

// db.students.find();
// ? add dancing to gobind hobbies

// db.students.updateMany(
//   { name: "Gobinda" },
//   {
//     $push: {
//       hobbies: " dancing",
//     },
//   }
// );

// db.students.find();
// ? decrease age of subodh by 20

// db.students.updateMany(
//   { name: "Subodh" },
//   {
//     $inc: {
//       age: -20,
//     },
//   }
// );
// ? remove singing form subodh

// db.students.updateMany(
//   { name: "Subodh" },
//   {
//     $push: {
//       hobbies: "singing",
//     },
//   }
// );

// db.students.updateMany(
//   { name: "Subodh" },
//   {
//     $pop: {
//       hobbies: 1,
//     },
//   }
// );

// ? remove trekking from subodh hobbies
// db.students.updateMany(
//   { name: "Subodh" },
//   {
//     $pull: {
//       hobbies: "trekking",
//     },
//   }
// );

//  ? remove football and e-gaming from nitesh hobies

// $ pullAll

// ? mention select

// db.students.updateMany(
//   { _id: ObjectId("67838ee2fa698a6f89d19697") },
//   {
//     $pullAll: {
//       hobbies: ["Football", "E-Gaming"],
//     },
//   }
// );

// db.students.find();
