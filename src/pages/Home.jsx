import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import HomeMovieList from "../components/HomeMovieList";
import Navbar from "../components/Navbar";
import { getNowPlayingMovies, getPopularMovies } from "../utils/api";

function Home() {
  const [popularMovies, setPopularMovies] = useState([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);

  const popularHandler = async () => {
    try {
      const data = await getPopularMovies();

      const finalResults = data.results.map((movie) => ({
        id: movie.id,
        title: movie.title,
        genres: movie.genre_ids.map((genre) => genre),
        rating: movie.vote_average.toFixed(1),
        year: movie.release_date.split("-")[0],
        posterUrl: movie.poster_path
          ? `https://image.tmdb.org/t/p/w200/${movie.poster_path}`
          : null,
      }));

      // just get the first 10 movies
      setPopularMovies(finalResults.slice(0, 8));
    } catch (error) {
      console.error("error while getting popular movies", error);
      setPopularMovies([]);
    }
  };

  const nowPlayingHandler = async () => {
    try {
      const data = await getNowPlayingMovies();

      const finalResults = data.results.map((movie) => ({
        id: movie.id,
        title: movie.title,
        genres: movie.genre_ids.map((genre) => genre),
        rating: movie.vote_average.toFixed(1),
        year: movie.release_date.split("-")[0],
        posterUrl: movie.poster_path
          ? `https://image.tmdb.org/t/p/w200/${movie.poster_path}`
          : null,
      }));

      // just get the first 10 movies
      setNowPlayingMovies(finalResults.slice(0, 8));
    } catch (error) {
      console.error("error while getting now playing movies", error);
      setNowPlayingMovies([]);
    }
  };

  useEffect(() => {
    popularHandler();
    nowPlayingHandler();
  }, []);

  return (
    <>
      <Navbar />

      {/* <!-- Hero --> */}
      <Hero />

      {/* Trending List */}
      <div className="mt-12">
        <HomeMovieList headerTitle="Popular" movieList={popularMovies} />
      </div>

      <div className="mt-12">
        <HomeMovieList headerTitle="Now Playing" movieList={nowPlayingMovies} />
      </div>

      <Footer />
    </>
  );
}

export default Home;
