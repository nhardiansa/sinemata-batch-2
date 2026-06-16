import Footer from "../components/Footer";
import Hero from "../components/Hero";
import HomeMovieList from "../components/HomeMovieList";
import Navbar from "../components/Navbar";

function Home() {
  const trendingMovieList = [
    {
      title: "Chronos Letterbound",
      genres: ["Sci-Fi", "Drama"],
      rating: 8.7,
      year: 2024,
      posterUrl: "",
    },
    {
      title: "The Midnight Horizon",
      genres: ["Sci-Fi", "Thriller", "Mystery"],
      rating: 8.2,
      year: 2025,
      posterUrl: "",
    },
    {
      title: "Echoes of Yesterday",
      genres: ["Drama", "Romance"],
      rating: 7.9,
      year: 2023,
      posterUrl: "",
    },
    {
      title: "Neon Cyberpunk 2099",
      genres: ["Sci-Fi", "Action"],
      rating: 8.5,
      year: 2026,
      posterUrl: "",
    },
    {
      title: "The Last Autumn",
      genres: ["Drama"],
      rating: 7.5,
      year: 2022,
      posterUrl: "",
    },
    {
      title: "Quantum Paradox",
      genres: ["Sci-Fi", "Mystery", "Adventure"],
      rating: 8.9,
      year: 2024,
      posterUrl: "",
    },
    {
      title: "Silent Symphony",
      genres: ["Drama", "Music"],
      rating: 8.0,
      year: 2021,
      posterUrl: "",
    },
    {
      title: "Shadows in the Nebula",
      genres: ["Sci-Fi", "Horror"],
      rating: 7.2,
      year: 2025,
      posterUrl: "",
    },
    {
      title: "Beyond the Looking Glass",
      genres: ["Fantasy", "Drama", "Mystery"],
      rating: 8.3,
      year: 2023,
      posterUrl: "",
    },
    {
      title: "Stellar Drift",
      genres: ["Sci-Fi", "Adventure"],
      rating: 8.6,
      year: 2024,
      posterUrl: "",
    },
  ];

  const recomendedMovieList = [
    {
      title: "Chronos Letterbound",
      genres: ["Sci-Fi", "Drama"],
      rating: 8.7,
      year: 2024,
      posterUrl: "",
    },
    {
      title: "The Midnight Horizon",
      genres: ["Sci-Fi", "Thriller", "Mystery"],
      rating: 8.2,
      year: 2025,
      posterUrl: "",
    },
    {
      title: "Echoes of Yesterday",
      genres: ["Drama", "Romance"],
      rating: 7.9,
      year: 2023,
      posterUrl: "",
    },
    {
      title: "Neon Cyberpunk 2099",
      genres: ["Sci-Fi", "Action"],
      rating: 8.5,
      year: 2026,
      posterUrl: "",
    },
    {
      title: "The Last Autumn",
      genres: ["Drama"],
      rating: 7.5,
      year: 2022,
      posterUrl: "",
    },
    {
      title: "Quantum Paradox",
      genres: ["Sci-Fi", "Mystery", "Adventure"],
      rating: 8.9,
      year: 2024,
      posterUrl: "",
    },
    {
      title: "Silent Symphony",
      genres: ["Drama", "Music"],
      rating: 8.0,
      year: 2021,
      posterUrl: "",
    },
    {
      title: "Shadows in the Nebula",
      genres: ["Sci-Fi", "Horror"],
      rating: 7.2,
      year: 2025,
      posterUrl: "",
    },
    {
      title: "Beyond the Looking Glass",
      genres: ["Fantasy", "Drama", "Mystery"],
      rating: 8.3,
      year: 2023,
      posterUrl: "",
    },
    {
      title: "Stellar Drift",
      genres: ["Sci-Fi", "Adventure"],
      rating: 8.6,
      year: 2024,
      posterUrl: "",
    },
  ];

  return (
    <>
      <Navbar />

      {/* <!-- Hero --> */}
      <Hero />

      {/* Trending List */}
      <div className="mt-12">
        <HomeMovieList
          headerTitle="Trending Now"
          movieList={trendingMovieList}
        />
      </div>

      <div className="mt-12">
        <HomeMovieList
          headerTitle="Recommended For You"
          movieList={recomendedMovieList}
        />
      </div>

      <Footer />
    </>
  );
}

export default Home;
