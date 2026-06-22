function HomeMovieCard({ title, rating, year, posterUrl, genres }) {
  return (
    <div className="card-item min-w-50 max-w-50">
      <div className="image-wrapper relative">
        <img
          src={posterUrl || `https://placehold.co/200x300?text=${title}`}
          alt="${title} Poster"
          className="w-full h-75 object-cover rounded-lg"
        />

        {/* <!-- Filter --> */}
        <div className="filter absolute inset-0 bg-linear-to-b from-black/80 to-transparent rounded-lg"></div>

        {/* <!-- Action --> */}
        <div className="genre-favorite-btn absolute top-0 w-full flex justify-between items-center px-2 py-3">
          <span className="text-xs text-white font-bold leading-normal">
            {genres.join(" · ")}
          </span>

          <div className="favorite-btn w-8 h-8 flex items-center justify-center bg-black/60 rounded-full">
            <span
              className="favorite-icon material-icons-round text-white cursor-pointer"
              style={{ fontSize: "16px" }}
            >
              favorite
            </span>
          </div>
        </div>
      </div>

      <div className="card-content mt-2">
        <div className="flex items-start justify-between">
          <a
            href="#"
            className="text-white text-sm font-semibold hover:underline"
          >
            {title}
          </a>
          <div className="text-sm text-amber-600 flex items-center gap-1">
            <span className="star text-lg leading-none">★</span>
            <span className="rating-value">{rating}</span>
          </div>
        </div>
        <div className="year">
          <span className="text-sine-gray text-xs">{year}</span>
        </div>
      </div>
    </div>
  );
}

export default HomeMovieCard;
