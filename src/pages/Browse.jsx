import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BrowseMovieGrid from "../components/BrowseMovieGrid";
import { useEffect, useState } from "react";
import { getMovieSearch } from "../utils/api";
import { useWatchlist } from "../store/useWatchlist";

function Browse() {
  const [query, setQuery] = useState("");
  const [movieList, setMovieList] = useState([]);
  const [totalPage, setTotalPage] = useState(0);
  const [totalResults, setTotalResults] = useState(0);
  const [page, setPage] = useState(2);

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setPage(1);
    setTotalPage(0);

    if (query.trim() === "") {
      alert("Please enter a search query.");
      return;
    }

    try {
      const result = await getMovieSearch(query);

      setTotalPage(result.total_pages);
      setTotalResults(result.total_results);

      const finalResults = result.results.map((movie) => {
        return {
          key: movie.id,
          title: movie.title,
          genres: movie.genre_ids.map((genre) => genre),
          rating: movie.vote_average.toFixed(1),
          year: movie.release_date.split("-")[0],
          posterUrl: movie.poster_path
            ? `https://image.tmdb.org/t/p/w200/${movie.poster_path}`
            : null,
        };
      });

      console.log(finalResults);
      setMovieList(finalResults);
    } catch (error) {
      console.error(error);
      setMovieList([]);
    }
  };

  const handleLoadMore = async () => {
    try {
      const result = await getMovieSearch(query, page + 1);
      const finalResults = result.results.map((movie) => {
        return {
          key: movie.id,
          title: movie.title,
          genres: movie.genre_ids.map((genre) => genre),
          rating: movie.vote_average.toFixed(1),
          year: movie.release_date.split("-")[0],
          posterUrl: movie.poster_path
            ? `https://image.tmdb.org/t/p/w200/${movie.poster_path}`
            : null,
        };
      });
      setMovieList([...movieList, ...finalResults]);
      setPage(page + 1);
    } catch (error) {
      console.error(error);
    }
  };

  const initMovies = async () => {
    try {
      const result = await getMovieSearch("a");
      const finalResults = result.results.map((movie) => {
        return {
          key: movie.id,
          title: movie.title,
          genres: movie.genre_ids.map((genre) => genre),
          rating: movie.vote_average.toFixed(1),
          year: movie.release_date.split("-")[0],
          posterUrl: movie.poster_path
            ? `https://image.tmdb.org/t/p/w200/${movie.poster_path}`
            : null,
        };
      });
      setMovieList(finalResults);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    initMovies();
  }, []);

  return (
    <>
      <Navbar />

      {/* Search Content */}
      <div className="min-h-[70vh]">
        <div className="search-content mt-8 text-white">
          <div className="content-wrapper max-w-7xl mx-auto">
            {/* Heading */}
            <div className="flex items-center gap-x-3">
              <div className="ornament w-1 h-8 bg-amber-600"></div>
              <h2 className="font-secondary text-4xl">BROWSE FILMS</h2>
            </div>

            {/* Search Input */}
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Search movie..."
                className="input rounded-xl py-7 px-4 w-full mt-10"
                value={query}
                onChange={handleSearch}
              />
            </form>

            <p className="text-gray-400 mt-4">
              Ditemukan{" "}
              <span className="text-amber-600 font-bold">
                {totalResults} film
              </span>{" "}
              untuk pencarian "{query}"
            </p>

            {/* Dynamic Filter Search Button */}
            <div className="container mt-8 flex gap-x-2">
              <button className="btn font-bold text-base rounded-full border-none bg-amber-600 hover:bg-amber-700 text-gray-900 py-2 px-4">
                Semua
              </button>
              <button className="cursor-pointer bg-[#1C2127] hover:bg-gray-800 border border-[#3A4049] rounded-full py-2 px-4 text-gray-400">
                Movie
              </button>
              <button className="cursor-pointer bg-[#1C2127] hover:bg-gray-800 border border-[#3A4049] rounded-full py-2 px-4 text-gray-400">
                Series
              </button>
              <button className="cursor-pointer bg-[#1C2127] hover:bg-gray-800 border border-[#3A4049] rounded-full py-2 px-4 text-gray-400">
                2020+
              </button>
              <button className="cursor-pointer bg-[#1C2127] hover:bg-gray-800 border border-[#3A4049] rounded-full py-2 px-4 text-gray-400">
                2010-2019
              </button>
              <button className="cursor-pointer bg-[#1C2127] hover:bg-gray-800 border border-[#3A4049] rounded-full py-2 px-4 text-gray-400">
                Sebelum 2010
              </button>
            </div>
          </div>
        </div>

        {/* Search Result */}
        {/* <div className="wrapper"> */}
        <BrowseMovieGrid movieList={movieList} />

        {/* Pagination Button */}
        {page < totalPage && (
          <div className="max-w-7xl mx-auto mt-8 flex justify-center gap-x-2">
            <button onClick={handleLoadMore} className="btn btn-primary">
              Muat Lainnya
            </button>
          </div>
        )}
        {/* </div> */}
      </div>

      <Footer />
    </>
  );
}

export default Browse;
