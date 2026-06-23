import HomeMovieCard from "./HomeMovieCard";

export default function BrowseMovieGrid({ movieList }) {
  return (
    <div className="max-w-7xl mx-auto">
      {/* <!-- List Card --> */}
      <div className="cards-wrapper flex flex-wrap gap-x-4 gap-y-8 mt-8">
        {movieList.length ? (
          movieList.map((movie) => (
            <HomeMovieCard
              id={movie.key}
              key={movie.title}
              title={movie.title}
              genres={movie.genres}
              rating={movie.rating}
              year={movie.year}
              posterUrl={movie.posterUrl}
            />
          ))
        ) : (
          // show this if movieList is empty
          <p className="w-full text-center mt-8 text-xl text-gray-500">
            No movie found.
          </p>
        )}
      </div>
    </div>
  );
}
