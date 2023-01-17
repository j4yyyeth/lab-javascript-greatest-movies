// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movieArr) {
    return movieArr.map((element) => {
      return element.director;
    })
  }

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(array) {
    let numberMovies = array.filter((el) => {
      return el.director === 'Steven Spielberg' && el.genre.includes("Drama");
    });
    return numberMovies.length;
  }

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(array) {
  if (array.length === 0) {
    return 0;
  }
  
  return +(array.map((movie) => {
    return movie.score
  }).reduce((acc, value) => {
      if (!value) {
          return acc + 0
      } else {

          return acc + value
      }
  })/array.length).toFixed(2)
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(array) {
  let newArray = array.filter((element) => {
    return element.genre.includes("Drama");
  })

  if (newArray.length === 0) {
      return 0;
    }

    let newLength = newArray.length;
    
    return +(newArray.map((movie) => {
      return movie.score
    }).reduce((acc, value) => {
        if (!value) {
            return acc + 0
        } else {

            return acc + value
        }
    })/newLength).toFixed(2)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(array) {
  let newArr = array.map((element) => {
    return element;
  });

  return newArr.sort((a,b) => {
    if (a.year === b.year) {
      return a.title.localeCompare(b.title);
    }
    else {
      return a.year - b.year;
    }
  });
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(array) {
  let titles = array.map((element)=>{
    return element.title;
  });


  
  return titles.sort((a,b) => {
    return a.localeCompare(b);
  }).slice(0,20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
