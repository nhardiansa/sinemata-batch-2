import { Route, Routes } from "react-router";
import Browse from "./pages/Browse";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import Watchlist from "./pages/Watchlist";
import Login from "./pages/Login";
import { LoggedRoute, UnloggedRoute } from "./components/ProtectedRoute";

function App() {
  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route path="/browse" element={<Browse />} />

      <Route
        path="/watchlist"
        element={
          <UnloggedRoute>
            <Watchlist />
          </UnloggedRoute>
        }
      />

      <Route path="/movie/:id" element={<MovieDetails />} />
      <Route
        path="/login"
        element={
          <LoggedRoute>
            <Login />
          </LoggedRoute>
        }
      />
    </Routes>
  );
}

export default App;
