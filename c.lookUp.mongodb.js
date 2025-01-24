use("narrow-way");
// db.course.insertOne({
//   name: "MERN",
//   duration: 75,
//   scope: "fullstack",
//   time: "3pm to 5pm",
// });

// db.student.insertOne({
//   name: "Ishika Khadka",
//   email: "ishika@gmail.com",
//   address: "Bhaktapur",
//   courseId: ObjectId("678cd443e30acccb93995f7e"),
// });

// db.course.find();
// db.student.find();

// db.student.deleteMany({});

// db.student.aggregate([
//   {
//     $match: {},
//   },
//   {
//     $lookup: {
//       from: "course",
//       localField: "courseId",
//       foreignField: "_id",
//       as: "courseDetail",
//     },
//   },
// ]);

// todo :  na bhujeko khanda ma feri dekhi

// db.owner.insertMany([
//   {
//     name: "Praful shrestha",
//     address: "lalitpur",
//   },
//   {
//     name: "Aayush bhujel",
//     address: " Kathmandu",
//   },
// ]);

// db.owner.find();

// db.vechicle.insertOne({
//   name: "MT15",
//   brand: "Yamaha",
//   regNo: 123,
//   ownerId: ObjectId("678cd8a634480ca0bbca9e04"),
// });

// ? find vechicle with their owner
// db.vechicle.aggregate([
//   {
//     $match: {},
//   },
//   {
//     $lookup: {
//       from: "owner",
//       localField: "ownerId",
//       foreignField: "_id",
//       as: "ownerDetail",
//     },
//   },
// ]);

// db.vechicle.find();

//  ? in owner side

db.owner.aggregate([
  {
    $match: {},
  },
  {
    $lookup: {
      from: "vechicle",
      localField: "_id",
      foreignField: "ownerId",
      as: "vechicleData",
    },
  },
  {
    $project: {
      name: 1,
      address: 1,
      "vechicleData.name": 1,
      "vechicleData.brand": 1,
      "vechicleData.regNo": 1,
    },
  },
]);
