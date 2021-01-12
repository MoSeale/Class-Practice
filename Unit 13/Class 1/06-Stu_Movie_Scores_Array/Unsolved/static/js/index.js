// Array of movie ratings
var movieScores = [
  4.4,
  3.3,
  5.9,
  8.8,
  1.2,
  5.2,
  7.4,
  7.5,
  7.2,
  9.7,
  4.2,
  6.9
];

// Starting a rating count
var sum = 0;

// Arrays to hold movie scores
var goodMovieScores = [];
var okMovieScores = [];
var badMovieScores = [];


for (var j = 0; j < movieScores.length; j++) {
  ////keeping track of total score in sum
  var score=movieScores[j]
  //console.log(score)
  
  var sum += score
  //console.log(sum)

  //if score >7 then append to good movie scores
  if(score>7){goodMovieScores.push(score)}

  //Add scores between 5 and 7 to the okMovies array.
  else if(score<=7 && score>= 5){okMovieScores.push(score)}

  //Add the rest of the scores to the the badMovies array.
  else{badMovieScores.push(score)}
  
}

//calculate the average rating for all of the movies.
var average=sum/movieScores.length


// Finally, print out how many good, ok and bad movies there were 
//and what the overall total score was.

console.log(`There are ${goodMovieScores.length} Good Movies`)
console.log(`There are ${okMovieScores.length} Ok Movies`)
console.log(`There are ${badMovieScores.length} Bad Movies`)