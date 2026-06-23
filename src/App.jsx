import { Route, Routes } from "react-router";
import Browse from "./pages/Browse";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import Watchlist from "./pages/Watchlist";

function App() {
  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route path="/browse" element={<Browse />} />
      <Route path="/watchlist" element={<Watchlist />} />
      <Route path="/movie/:id" element={<MovieDetails />} />
    </Routes>
  );
}

export default App;
