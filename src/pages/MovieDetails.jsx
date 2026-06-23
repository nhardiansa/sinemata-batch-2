import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { getDetailsMovie } from "../utils/api";

function MovieDetails() {
  const casts = [
    {
      name: "Actor Name",
      character: "Character Name",
      image: "https://placehold.co/50x50?text=Actor Name",
    },
    {
      name: "Actor Name",
      character: "Character Name",
      image: "https://placehold.co/50x50?text=Actor Name",
    },
    {
      name: "Actor Name",
      character: "Character Name",
      image: "https://placehold.co/50x50?text=Actor Name",
    },
    {
      name: "Actor Name",
      character: "Character Name",
      image: "https://placehold.co/50x50?text=Actor Name",
    },
  ];

  const crews = [
    {
      name: "Crew Name",
      job: "Job Name",
      image: "https://via.placeholder.com/50x50?text=No+Image",
    },
    {
      name: "Crew Name",
      job: "Job Name",
      image: "https://via.placeholder.com/50x50?text=No+Image",
    },
    {
      name: "Crew Name",
      job: "Job Name",
      image: "https://via.placeholder.com/50x50?text=No+Image",
    },
    {
      name: "Crew Name",
      job: "Job Name",
      image: "https://via.placeholder.com/50x50?text=No+Image",
    },
  ];

  const { id } = useParams();
  const [movie, setMovie] = useState({
    backdrop_path: "",
    poster_path: "",
    title: "",
    year_released: "",
    duration: 0,
    genres: [],
    synopsis: "",
    rating: 0,
  });

  const detailsMovieHandler = async (id) => {
    try {
      const data = await getDetailsMovie(id);
      setMovie({
        ...movie,
        backdrop_path: `https://image.tmdb.org/t/p/w1280/${data.backdrop_path}`,
        poster_path: `https://image.tmdb.org/t/p/w200/${data.poster_path}`,
        title: data.title,
        year_released: data.release_date.split("-")[0],
        duration: data.runtime,
        genres: data.genres.map((genre) => genre.name),
        synopsis: data.overview,
        rating: data.vote_average.toFixed(1),
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    detailsMovieHandler(id);
  }, [id]);

  return (
    <div className="page min-h-screen">
      <Navbar />

      <div className="content font-inter pb-20">
        <div className="heading-content relative">
          {/* Hero Background */}
          <div className="hero-background">
            {/* this background have gradient overlay black from bottom to top but black in top is black with 50% opacity */}
            <div className="gradient-overlay absolute bottom-0 left-0 w-full h-full bg-linear-to-t from-black to-[rgba(0,0,0,0.5)]"></div>
            <img
              src={
                movie.backdrop_path
                  ? movie.backdrop_path
                  : "https://placehold.co/1600x400?text=Loading..."
              }
              alt="Title here"
              className="w-full h-95 object-cover object-center"
            />
          </div>

          {/* Movie Detail */}
          <div className="movie-detail-heading absolute -bottom-45 left-0 w-full">
            <div className="wrapper w-full max-w-7xl mx-auto flex items-start">
              {/* Image poster portrait */}
              <div className="image-container w-70 h-105">
                <img
                  src={
                    movie.poster_path
                      ? movie.poster_path
                      : "https://placehold.co/200x300?text=Loading..."
                  }
                  alt={"Loading..."}
                  className="w-full h-full rounded-xl object-cover border-2 border-[#3A4049]"
                />
              </div>

              {/* Movie Title and CTA */}
              <div className="movie-title-cta ml-8 pt-7.5">
                {/* title */}
                <h1 className="text-[56px] mt-0.5 mb-3.5 font-secondary font-normal">
                  {movie.title ? movie.title : "Loading..."}
                </h1>
                {/* rating, year,duration, genre, age */}
                <div className="flex items-center gap-x-4 mt-3">
                  <div className="rating-badge">
                    <span className="text-sm font-bold bg-[#FBBF2426] px-2 py-1.5 rounded-sm text-[#FBBF24]">
                      {movie.rating ? `★ ${movie.rating} / 10` : "Loading..."}
                    </span>
                  </div>
                  <span className="text-sm text-[#A9A9A9]">
                    {movie.year_released && movie.duration && movie.genres
                      ? `${movie.year_released} · ${movie.duration} min · ${movie.genres.join(", ")}`
                      : "Loading..."}
                  </span>
                </div>

                {/* CTA (Watch Trailer, Add to Watchlist, Like) */}
                <div className="cta-buttons flex items-center gap-x-4 mt-7.25">
                  <button className="bg-[#FF8000] py-3.25 px-7 rounded-lg text-black font-bold text-sm hover:bg-[#ff8000cc] transition duration-300 cursor-pointer">
                    ▶ Tonton Trailer
                  </button>
                  <button
                    className={`bg-[#3A4049] py-3.25 px-7 rounded-lg text-white font-bold text-sm $hover:bg-[#3a4049cc] transition duration-300 cursor-pointer`}
                  >
                    Tambah ke Watchlist
                  </button>
                  {/* <button className="bg-[#3A4049] py-3.25 px-7 rounded-lg text-white font-bold text-sm hover:bg-[#3a4049cc] transition duration-300 cursor-pointer">
                ♡ Like
              </button> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Movie Description */}
        <div className="movie-description w-full max-w-7xl mx-auto mt-60 px-4 flex gap-x-14">
          {/* Sinopsis and Cast */}
          <div className="sinopsis-cast max-w-180.25">
            <div className="sinopsis flex flex-col gap-y-4.5">
              <h2 className="text-2xl font-secondary">SINOPSIS</h2>
              <p className="text-[#A9A9A9] text-sm leading-relaxed">
                {movie.synopsis ? movie.synopsis : "Loading..."}
              </p>
            </div>
            <div className="casts flex flex-col mt-9.75 gap-y-7.25">
              <h2 className="text-2xl font-secondary">CAST UTAMA</h2>
              <div className="list-cast flex items-center gap-x-7 overflow-x-auto">
                {casts && casts.length > 0 ? (
                  casts.map((cast, index) => (
                    <div
                      key={index}
                      className="cast flex flex-col items-center w-fit"
                    >
                      <img
                        src={cast.image}
                        alt={cast.name}
                        className="w-16.25 h-16.25 border border-[#3A4049] rounded-full object-cover"
                      />
                      <p className="text-white mt-2">{cast.name}</p>
                      <span>
                        <p className="text-[#6B7280] text-sm">
                          {cast.character}
                        </p>
                      </span>
                    </div>
                  ))
                ) : (
                  <p className="text-[#A9A9A9] text-sm">Cast tidak tersedia.</p>
                )}
              </div>
            </div>
          </div>

          {/* Crew */}
          <div className="crew-card bg-[#1C2127] border border-[#2A2F37] rounded-lg pt-8 pb-11.25 px-5.5 w-fit flex flex-col mt-12 gap-y-4.5 h-fit">
            {crews && crews.length > 0 ? (
              crews.map((crew, index) => (
                <div
                  key={index}
                  className="w-59 flex justify-between pb-1.25 border-b border-[#2A2F37]"
                >
                  <span className="text-sm text-[#6B7280]">{crew.job}</span>
                  <span className="text-white text-sm">{crew.name}</span>
                </div>
              ))
            ) : (
              <p className="text-[#A9A9A9] text-sm">Crew tidak tersedia.</p>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default MovieDetails;
