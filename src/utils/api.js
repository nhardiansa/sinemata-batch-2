const ACCESS_KEY = import.meta.env.VITE_ACCESS_KEY;

export const getMovieSearch = async (query, page=1) => {
  const url = `https://api.themoviedb.org/3/search/movie?query=${query}&page=${page}`;
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${ACCESS_KEY}`,
    },
  });
  return response.json();
};

export const getPopularMovies = async () => {
  try {
    const url = `https://api.themoviedb.org/3/movie/popular`;
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${ACCESS_KEY}`,
      },
    });
    return response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getNowPlayingMovies = async () => {
  try {
    const url = `https://api.themoviedb.org/3/movie/now_playing`;
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${ACCESS_KEY}`,
      },
    });
    return response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}

export const getDetailsMovie = async (id) => {
  try {
    const url = `https://api.themoviedb.org/3/movie/${id}`;
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${ACCESS_KEY}`,
      },
    });
    return response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}

export const getGenres = async () => {
  try {
    const url = `https://api.themoviedb.org/3/genre/movie/list`;
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${ACCESS_KEY}`,
      },
    });
    return response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}
