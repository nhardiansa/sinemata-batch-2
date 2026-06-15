// ======= Movies Manipulation =======
const movies = []
const popularURL = "https://api.themoviedb.org/3/movie/popular"
const genresURL = "https://api.themoviedb.org/3/genre/movie/list"
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZTY5NzNhNGE2YjhlNTJmMzFhNDFlYTdkNDM4Mjk0MyIsIm5iZiI6MTYzNTE1MTk4Ny43NTcsInN1YiI6IjYxNzY3MDczNmUwZDcyMDAyNDZhZDAwYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Zok9IaVBfX4-RSyU0O9iroE8nIFrHRDQok086ng2qP0'
  }
};

async function getGenres () {
  const rawResult = await fetch(genresURL, options)
  const json = await rawResult.json()
  const { genres } = json;
  return genres
}

const cardContainer = document.querySelector("#cards-wrapper");
function movieCard ({title, genres, rating, year, posterUrl}) {
  return `
    <div class="card-item rounded-lg min-w-50 max-w-50">
      <div class="image-wrapper relative">
        <img
          src="${posterUrl}"
          alt="${title} Poster"
          class="w-full h-[300px] object-cover rounded-lg"
        />

        <!-- Filter -->
        <div
          class="filter absolute inset-0 bg-gradient-to-b from-black/80 to-transparent rounded-lg"
        ></div>

        <!-- Action -->
        <div
          class="genre-favorite-btn absolute top-0 w-full flex justify-between items-center px-2 py-3"
        >
          <span class="text-xs text-white font-bold leading-normal"
            >${genres}</span
          >

          <div
            class="favorite-btn w-8 h-8 flex items-center justify-center bg-black/60 rounded-full"
          >
            <span
              class="favorite-icon material-icons-round text-white cursor-pointer"
              style="font-size: 16px"
            >
              favorite
            </span>
          </div>
        </div>
      </div>

      <div class="card-content mt-2">
        <div class="flex items-start justify-between">
          <a
            href="#"
            class="text-white text-sm font-semibold hover:underline"
          >
            ${title}
          </a>
          <div
            class="rating text-sm text-amber-600 flex items-center gap-1"
          >
            <span class="star text-lg leading-none">★</span>
            <span class="rating-value">${rating}</span>
          </div>
        </div>
        <div class="year">
          <span class="text-sine-gray text-xs">${year}</span>
        </div>
      </div>
    </div>
  `
}

async function getMovies () {
  try {

    const rawResult = await fetch(popularURL, options)
    const json = await rawResult.json()
    const { results } = json;

    const genres = await getGenres();
    
    results.forEach(result => {
      movies.push({
        title: result.title,
        genres: result.genre_ids
          .map(id => {
            const genre = genres.find(genre => genre.id === id)
            return genre.name
          })
          .join(" · ")
          .toUpperCase(),
        rating: result.vote_average.toFixed(1),
        year: result.release_date.split("-")[0],
        posterUrl: `https://image.tmdb.org/t/p/w200${result.poster_path}`,
      })
    })

    // sorting
    const newMovies = movies.filter((movie) => movie.rating >= 8).sort((a, b) => a.rating - b.rating);

    cardContainer.innerHTML = newMovies.map(movieCard).slice(0, 7).join("");

    const favoriteBtns = document.querySelectorAll(".favorite-icon");

    favoriteBtns.forEach((button) => {
      button.addEventListener("click", () => {
        button.classList.toggle("text-amber-600");
        button.classList.toggle("text-white");
      });
    });

  } catch (err) {
    console.error(err);
  }
}

getMovies();
