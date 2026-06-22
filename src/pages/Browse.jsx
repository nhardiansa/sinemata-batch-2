import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BrowseMovieGrid from "../components/BrowseMovieGrid";

function Browse() {
  const dummyMovieList = [
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

      {/* Search Content */}
      <div className="search-content mt-8 text-white">
        <div className="content-wrapper max-w-7xl mx-auto">
          {/* Heading */}
          <div className="flex items-center gap-x-3">
            <div className="ornament w-1 h-8 bg-amber-600"></div>
            <h2 className="font-secondary text-4xl">BROWSE FILMS</h2>
          </div>

          {/* Search Input */}
          <input
            type="text"
            className="bg-[#1C2127] border border-[#3A4049] rounded-xl py-4 px-4 w-full mt-10"
            placeholder="Search..."
          />

          <p className="text-gray-400 mt-4">
            Ditemukan <span className="text-amber-600 font-bold">12 film</span>{" "}
            untuk pencarian "chronos"
          </p>

          {/* Dynamic Filter Search Button */}
          <div className="container mt-8 flex gap-x-2">
            <button className="cursor-pointer bg-amber-600 hover:bg-amber-700 rounded-full py-2 px-4 font-bold text-gray-900">
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
      <div className="wrapper">
        <BrowseMovieGrid movieList={dummyMovieList} />
      </div>

      <Footer />
    </>
  );
}

export default Browse;
