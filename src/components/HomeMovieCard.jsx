import { Link, useNavigate } from "react-router";
import { useGenres } from "../store/useGenres";
import {
  addToWatchlist,
  removeFromWatchlist,
  useWatchlist,
} from "../utils/watchlist";
import { useAuth } from "../store/useAuth";

function HomeMovieCard({ title, rating, year, posterUrl, genres, id = null }) {
  const navigate = useNavigate();
  const { genres: genresList } = useGenres((state) => state);
  const { user } = useAuth((state) => state);
  const watchlist = useWatchlist(user?.uid);

  const handlerAddToWatchlist = () => {
    if (!user) {
      navigate("/login");
      return;
    }

    if (watchlist.find((movie) => movie.id === id)) {
      removeFromWatchlist(user.uid, id);
      return;
    }

    addToWatchlist(user.uid, {
      id,
      title,
      posterUrl,
      genres,
      rating,
      year,
    });
  };

  const genresHandler = () => {
    return genresList
      .filter((genre) => genres.includes(genre.id))
      .map((genre) => genre.name.toUpperCase())
      .join(" · ");
  };

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
            {genresHandler()}
          </span>

          <div className="favorite-btn w-8 h-8 flex items-center justify-center bg-black/60 rounded-full">
            <span
              onClick={() => handlerAddToWatchlist()}
              className={`favorite-icon material-icons-round cursor-pointer ${
                watchlist.find((movie) => movie.id === id)
                  ? "text-red-500"
                  : "text-white"
              } `}
              style={{ fontSize: "16px" }}
            >
              favorite
            </span>
          </div>
        </div>
      </div>

      <div className="card-content mt-2">
        <div className="flex items-start justify-between">
          <Link
            to={`/movie/${id ? id : "id_not_found"}`}
            className="text-white text-sm font-semibold hover:underline"
          >
            {title}
          </Link>
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
