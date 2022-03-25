// The `movies` array from the file `src/data.js`.
console.log('movies: ', movies);


// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors() {}

const allDirectorsArray = movies.map((directorsElement) => {
  return directorsElement.director;
});

console.log(allDirectorsArray);

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movieArray) {
  const spielbergCount = movieArray.filter((keyElement) => keyElement.director === 'Steven Spielberg' && keyElement.genre.includes('Drama'));
  return spielbergCount.length;
};

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(someArray) {
  let totalSum = 0;
  let arraySize = someArray.length;
  for (i = 0; i < someArray.length; i++) {
     totalSum += someArray[i].score;
  }
  let averageScore = totalSum / arraySize;
  return averageScore.toFixed(2);
};

console.log(scoresAverage(movies));

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(someArray) {
  let filteredArray = someArray.filter((keyElement) => keyElement.genre.includes('Drama'));
  let totalSum = 0;
  let filteredArraySize = filteredArray.length;
  for (i = 0; i < filteredArray.length; i++) {
    totalSum += filteredArray[i].score;
  }
  let averageScore = totalSum / filteredArraySize;
  return averageScore.toFixed(2);
};

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movieArray) {
  const movieYearsArray = movieArray.map(keyElement => keyElement.year);
  let sortedYearsArray = movieYearsArray.sort((a, b) => a - b);
  return sortedYearsArray;
};

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(someArray) {
  const movieTitlesArray = someArray.map(keyElement => keyElement.title);
  let sortedTitlesArray = movieTitlesArray.sort();
  if (movieTitlesArray.length > 20) {
    movieTitlesArray.splice(20);
  }
  return movieTitlesArray;
};

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
