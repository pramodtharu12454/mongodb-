use("movie-management");

// db.movies.find();

// ? movie whoes name id " Homeland"

// name == "Homeland"
// ? operator
// $seq

// db.movies.findOne({name:{$eq: `Homeland`}});
// db.movies.findOne({name: "Homeland"});

// ? find movie whose rating is exactly 7

// rating.average === 7

// db.movies.find({"rating.average": 7});

// ? greater than
// ? $gt

// find movies whose runtime is greater than 60

// db.movies.find({runtime : {$gt: 60}},{name : 1, runtime: 1,});

// ? greater than equals to
// ? $gte

// find movie whose run time is greater than or equals to 60

// db.movies.find({runtime:{ $gte: 60}}).count();

// ? less than
// ? $lt

// find movies whose average is less than 5

// db.movies.find({runtime : {$lt:5 }});

// ? less than equals to
// ? $lte

// find movies whose weight is less than or equals to 97

// db.movies.find({weight: {$lte : 97}});

// ? !== 98

// $not
// find movies whose weight is not 98

// db.movies.find({weight : {$not :{$eq:98}}});
// db.movies.find({weight:{$ne:98}});

// logical operator
// ? $and
// ? $or
// ? $not
// ? nor

// $or
// ? find movies whose status "Ended" or rating is less than 5
// {status: "Ended"}
// {"rating.average": {lt:5}}

// db.movies.find(
//     {
//     $or:[{status : "Ended"}, {"rating.average": {$lt : 5}}],
// },
// {
//     name : 1,
//     status : 1,
//     rating : 1,
// }
// );

// ? find movies whose genre is either "Action" or "horror"

// db.movies.find(
//     {
//         $or:[{genres: "Action"}, {genres:"horror"}],
//     }
// );

// ? find movies whose rating is either 7 ,7.5,8,8.5,9,9.1,9.2,9.3,9.4

// db.movies.find({
//   $or: [
//     { "rating.average": 7 },
//     { "rating.average": 7.5 },
//     { "rating.average": 8 },
//     { "rating.average": 8.5 },
//     { "rating.average": 9 },
//     { "rating.average": 9.1 },
//     { "rating.average": 9.2 },
//   ],
// });

//? $in ==> same field  ma xa bhane can replace with $in;

// db.movies.find(
//   {
//     "rating.average": { $in: [7, 7.5, 8, 8.5, 9, 9.1, 9.2, 9.3, 9.4] },
//   },
//   { "rating.average": 1, _id: 0 }
// );

//? and
// find movies whose genres is Comedy and rating greater then 8

// db.movies.find(
//   { $and: [{ genres: "Comedy" }, { "rating.average": { $gt: 8 } }] },
//   { genres: 1, "rating.average": 1 }
// );

// find movie whose status is "Running" and genres is "Action" having rating greater then 7

// db.movies.find(
//   {
//     $and: [
//       { status: "Running" },
//       { genres: "Action" },
//       { "rating.average": { $gt: 7 } },
//     ],
//   },
//   {
//     status: 1,
//     genres: 1,
//     "rating.average": 1,
//   }
// );

//? $not
// $not: {$eq}
//$ne

// db.movies.find({genres: {$ne: "Action"}})

// db.movies.find();

//find movies whose genres is neither "Action" nor "Comedy"

// db.movies.find({$and : [{genres: {$ne: "Action"}},{genres: {$ne: "Comedy"}}]},{genres: 1})

// find movies whose genre is not " Action" and language is not "English"

// db.movies.find({$and : [{genres: {$ne: "Action"}},{language: {$ne: "English"}}]},{genres: 1,language: 1})

// db.movies.find({$nor : [{genres: "Action"},{language: "English"}]},{genres: 1,language: 1})

// db.movies.find({ genres: { $nin: ["Action", "Comedy"] } });

// find movies whose status is "Running"

// db.movies.find({$and: [{ status: "Running" }, { runtime:  60 }] });

// db.movies.find();

//  ? regex

db.movies.find({ summary: { $regex: "the winner OF",$options: "i"}});

// db.movies.find();
