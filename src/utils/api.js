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
