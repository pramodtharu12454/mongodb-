// ? read operation
// ? aggregate helps to run complex queries
// ? aggregate consists of pipeline stages
// ? popular stages
// ? 1. $match
// ? 2. $project
// ? 3. $lookup
// ? 4. $group
// ? 5. $limit
// ? 6. $skip
// ? 7. $sort
// ? 8. $unwind

use("movie-management");

// db.movies.find();

// db.movies.aggregate([
//   {
//     $match: {
//       "rating.average": { $gt: 9 },
//     },
//   },
//   {
//     $project: {
//       name: 1,
//       rating: 1,
//     },
//   },
// ]);

// ? match => filter condition
// ? $project => select

// db.movies.aggregate([
//   {
//     $match: {
//       "rating.average": { $gt: 9 },
//     },
//   },
//   {
//     $project: {
//       name: 1,
//       averageRating: "$rating.average",
//     },
//   },
// ]);

// ? find movies from higher rating to lower rating
// ? $sort
// ? 1 => ascending order
// ? 2 => descending order

// db.movies.aggregate([
//   {
//     $match: {
//       "rating.average": { $ne: null },
//     },
//   },
//   {
//     $sort: {
//       "rating.average": 1,
//     },
//   },
//   {
//     $project: {
//       name: 1,
//       rating: 1,
//     },
//   },
// ]);
//  ? find movies from higher to lower order from runtime
// db.movies.aggregate([
//   {
//     $match: {},
//   },
//   {
//     $sort: {
//       runtime: -1,
//     },
//   },
//   {
//     $project: {
//       name: 1,
//       runtime: 1,
//     },
//   },
// ]);

// db.movies.find();

// ? find movies having rating greater than or equal to 7 and less than or eqaul to 9
// ? 7<=rating <=9
// ? and sort in descending order of rating
// ? project name and rating

// db.movies.aggregate(
//     {
//       $match: {
//         $and: [
//           {
//             "rating.average": { $gte: 7 },
//           },
//           {
//             "rating.average": { $lte: 9 },
//           },
//         ],
//       },
//     },
//     {
//       $sort: {
//         "rating.average": -1,
//       },
//     },
//     {
//       $project: {
//         name: 1,
//         rating: 1,
//       },
//     }
//   );


