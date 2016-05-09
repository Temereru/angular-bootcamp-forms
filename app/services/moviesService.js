angular.module('movieLibrary').service('MoviesService', [function() {
    var movies = [{
      id:0,
      name:"robocop",
      year:2014,
      supportedResolution: [720,1080],
      posterImage:"http://upload.wikimedia.org/wikipedia/en/b/b1/Robocop_poster.jpg",
      shortDescription: "A 1987 American cyberpunk action film directed by Paul Verhoeven",
      isBlockbuster: true
    }, {
      id:1,
      name:"frozen",
      year:2013,
      supportedResolution: [720,1080],
      posterImage: "http://vignette2.wikia.nocookie.net/disney/images/5/58/Frozen-movie-poster.jpg/revision/latest/scale-to-width-down/1000?cb=20131002122858",
      shortDescription: "The film tells the story of a fearless princess who sets off on an epic journey alongside a rugged iceman",
      isBlockbuster: true
    }, {
      id:2,
      name:"3 days to kill",
      year:2014,
      supportedResolution: [480, 720,1080],
      posterImage: "http://t2.gstatic.com/images?q=tbn:ANd9GcSB6Vsz4iWHiML-6wQmsN5pQoo9VBxE_vIvplPInW06hqeojGmk",
      shortDescription: "A 2014 French-American action thriller film directed by McG and written by Luc Besson and Adi Hasak",
      isBlockbuster: false   
    }
  ];
  
  var getMovies = function(){
      return movies;
  }
  
  return {
      getMovies: getMovies
  } 
}]);
