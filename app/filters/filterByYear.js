"user strict"

angular.module('movieLibrary').filter('filterByYear', function() {
  return function(movies, year) {
      var retval = [];
      if (movies && year) {
        movies.forEach(function(movie) {
            if(movie.year === year){
                retval.push(movie);
            }
        });
      } 
     return retval;
  };
});