"user strict"

angular.module('movieLibrary').filter('filterByName', function() {
  return function(movies, name) {
      var retval = [];
      if (movies) {
        if (name){
            movies.forEach(function(movie) {
             if(movie.name.indexOf(name)>=0){
                 retval.push(movie);
             }
            });
        } else{
            retval = movies;
        }
      } 
     return retval;
  };
});