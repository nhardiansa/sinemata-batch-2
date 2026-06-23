import HomeMovieCard from "./HomeMovieCard";

export default function HomeMovieList({ headerTitle, movieList }) {
  return (
    <div className="trending-list max-w-7xl mx-auto">
      {/* <!-- Heading --> */}
      <div className="title-action flex justify-between items-center">
        <div className="flex items-center gap-x-3">
          <div className="ornament w-1 h-8 bg-amber-600"></div>
          <h2 className="text-white font-secondary text-4xl">{headerTitle}</h2>
        </div>

        <div className="action">
          <a className="text-sine-gray text-sm hover:underline" href="">
            Lihat semua →
          </a>
        </div>
      </div>

      {/* <!-- List Card --> */}
      <div
        id="cards-wrapper"
        className="cards-wrapper overflow-x-hidden flex gap-x-4.5 mt-8"
      >
        {movieList.map((movie) => (
          <HomeMovieCard
            id={movie.id}
            key={movie.title}
            title={movie.title}
            genres={movie.genres}
            rating={movie.rating}
            year={movie.year}
            posterUrl={movie.posterUrl}
          />
        ))}
      </div>
    </div>
  );
}
