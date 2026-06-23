import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BrowseMovieGrid from "../components/BrowseMovieGrid";
import { useWatchlist } from "../store/useWatchlist";

export default function Watchlist() {
  const { watchlist } = useWatchlist((state) => state);
  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-x-3 mt-8">
          <div className="ornament w-1 h-8 bg-amber-600"></div>
          <h2 className="font-secondary text-4xl">watchlist</h2>
        </div>

        {/* List Movie */}
        <BrowseMovieGrid movieList={watchlist} />
      </div>

      <Footer />
    </>
  );
}
