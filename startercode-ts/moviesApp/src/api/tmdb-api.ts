export const getMovies = () => {
  return fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=1`
  ).then((response) => {
    if (!response.ok)
      throw new Error(`Unable to fetch movies. Response status: ${response.status}`);
    return response.json();
  })
    .catch((error) => {
      throw error
    });
};
  
export const getMovie = (id: string) => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_TMDB_KEY}`
  ).then((response) => {
    if (!response.ok) {
      throw new Error(`Failed to get movie data. Response status: ${response.status}`);
    }
    return response.json();
  })
  .catch((error) => {
    throw error
 });
};
  export const getGenres = () => {
    return fetch(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=" + import.meta.env.VITE_TMDB_KEY + "&language=en-US"
    ).then( (response) => {
      if (!response.ok)
        throw new Error(`Unable to fetch genres. Response status: ${response.status}`);
      return response.json();
    })
    .catch((error) => {
      throw error
   });
  };

  export const getMovieImages = (id: string | number) => {
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}/images?api_key=${import.meta.env.VITE_TMDB_KEY}`
    ).then((response) => {
      if (!response.ok) {
        throw new Error("failed to fetch images");
      }
      return response.json();
    }).then((json) => json.posters)
      .catch((error) => {
        throw error
      });
  };

  export const getCastMember = (person_id: string | number) => {
    return fetch(
      `https://api.themoviedb.org/3/person/${person_id}?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US`
    ).then((response) => {
      if (!response.ok) {
        throw new Error("failed to fetch cast member");
      }
      return response.json();
    }).then((json) => json.results)
      .catch((error) => {
        throw error
      });
  };
  //`https://api.themoviedb.org/3/movie/1022789/images?api_key=6abaacc8d8d55c12e7c3b2ff08754395`
   `https://api.themoviedb.org/3/person/500?api_key=6abaacc8d8d55c12e7c3b2ff08754395&language=en-US`

  export const getMovieReviews = (id: string | number) => { //movie id can be string or number
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${import.meta.env.VITE_TMDB_KEY}`
    )
      .then((res) => res.json())
      .then((json) => {
        // console.log(json.results);
        return json.results;
      });
  };

  export const getUpcomingMovies = () => {
    return fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US&include_adult=false&page=1`
    )
    .then((response) => {
      if (!response.ok)
        throw new Error(`Unable to fetch ucoming movies. Response status: ${response.status}`);
      return response.json();
    })
      .catch((error) => {
        throw error
      });
  };
  export const getPopularMovies = () => {
    return fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=1`
    ).then((response) => {
      if (!response.ok)
        throw new Error(`Unable to fetch movies. Response status: ${response.status}`);
      return response.json();
    })
      .catch((error) => {
        throw error
      });
  };

  export const getCast = () => {
    return fetch(
      `https://api.themoviedb.org/3/person/popular?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US&page=1`
    ).then((response) => {
      if (!response.ok)
        throw new Error(`Unable to fetch popular persons. Response status: ${response.status}`);
      return response.json();
    })
      .catch((error) => {
        throw error
      });
    };

    // export const getPopularPerson = (id: string | number) => {
    //   return fetch(
    //     `https://api.themoviedb.org/3/person/${id}?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US`
    //   ).then((response) => {
    //     if (!response.ok) {
    //       throw new Error("failed to fetch person");
    //     }
    //     return response.json();
    //   }).then((json) => json.results)
    //     .catch((error) => {
    //       throw error
    //     });
    // };

    `https://api.themoviedb.org/3/person/popular?api_key=6abaacc8d8d55c12e7c3b2ff08754395&language=en-US&page=1`

    // https://api.themoviedb.org/3/genre/movie/list?api_key=6abaacc8d8d55c12e7c3b2ff08754395&language=en-US