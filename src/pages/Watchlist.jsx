import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BrowseMovieGrid from "../components/BrowseMovieGrid";
import { useWatchlist as useWatchlistFirebase } from "../utils/watchlist";
import { useAuth } from "../store/useAuth";

export default function Watchlist() {
  const { user } = useAuth((state) => state);
  const movies = useWatchlistFirebase(user.uid);

  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-x-3 mt-8">
          <div className="ornament w-1 h-8 bg-amber-600"></div>
          <h2 className="font-secondary text-4xl">my watchlist</h2>
        </div>

        {/* List Movie */}
        <BrowseMovieGrid movieList={movies} />
      </div>

      <Footer />
    </>
  );
}
