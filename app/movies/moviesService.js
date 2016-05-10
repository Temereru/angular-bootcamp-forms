angular.module('movieLibrary').service('MoviesService', [function() {
    var movies = [{
      id:0,
      name:"robocop",
      year:2014,
      supportedResolution: [720,1080],
      posterImage:"http://upload.wikimedia.org/wikipedia/en/b/b1/Robocop_poster.jpg",
      shortDescription: "A 1987 American cyberpunk action film directed by Paul Verhoeven"
    }, {
      id:1,
      name:"frozen",
      year:2013,
      supportedResolution: [720,1080],
      posterImage: "http://vignette2.wikia.nocookie.net/disney/images/5/58/Frozen-movie-poster.jpg/revision/latest/scale-to-width-down/1000?cb=20131002122858",
      shortDescription: "The film tells the story of a fearless princess who sets off on an epic journey alongside a rugged iceman"
    }, {
      id:2,
      name:"3 days to kill",
      year:2014,
      supportedResolution: [480, 720,1080],
      posterImage: "http://t2.gstatic.com/images?q=tbn:ANd9GcSB6Vsz4iWHiML-6wQmsN5pQoo9VBxE_vIvplPInW06hqeojGmk",
      shortDescription: "A 2014 French-American action thriller film directed by McG and written by Luc Besson and Adi Hasak"
    }
  ];
  
  var getMovies = function(){
      return angular.copy(movies);
  }
  
  var isIdValid = function(id){
      var retval = true;
      movies.every(function(movie){
         if (movie.id == id){
             retval = false;
             return false;
         } else{
             return true;
         }
      });

      return retval;
  };

  var addMovie = function(movie){
    movies.push(movie);
  }

  return {
      getMovies: getMovies,
      isIdValid: isIdValid,
      addMovie: addMovie
  } 
}]);
