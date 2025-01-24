use("movie-management");

// ? find movies whose rating is greater than 8
// ? and sort them in ascending order of rating
// ? project name and rating of movie

// ? sort with two or more fields
// ? sort is done from first field
//  ?here is an example where movies are sorted from rating
// ? if rating is same for any movies, then they are sorted using name field

// db.movies.aggregate([
//   {
// Stage 1: Filter movies to include only those with an average rating greater than 8
//     $match: {
//       "rating.average": { $gt: 8 },
//     },
//   },
//   {
// Stage 2: Sort the filtered movies
// First by average rating in ascending order (1)
// If ratings are the same, then by name in ascending order (1)
//     $sort: {
//       "rating.average": 1,
//       name: 1,
//     },
//   },
//   {
// Stage 3: Reshape the output documents to include only the necessary fields
// Include the 'name' of the movie
// Rename 'rating.average' to 'avgRating' for clarity
//     $project: {
//       name: 1,
//       avgRating: "$rating.average",
//     },
//   },
// ]);

// ? pagination
//  ? skip(offset)
//  ? limit

const limit = 5;
const page = 1;
const skip = (page - 1) * limit;

db.movies.aggregate([
  {
    $match: {
      "rating.average": { $gte: 9 },
    },
  },
  {
    $sort: {
      "rating.average": 1,
    },
  },
  {
    $skip: skip,
  },
  {
    $limit: limit,
  },
  {
    $project: {
      name: 1,
      rating: 1,
    },
  },
]);
//  sql ewuivalent
//  ? almost similar
// SELECT name, rating
// FROM movies
// WHERE rating >= 9
// ORDER BY rating ASC
// LIMIT 5 OFFSET 0;
