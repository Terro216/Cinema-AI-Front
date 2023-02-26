const getFilmById = (id: string | undefined) => {
  fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}`, {
    method: 'GET',
    headers: {
      'X-API-KEY': import.meta.env.VITE_KINOPOISK_KEY,
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then((json) => console.log(json))
    .catch((err) => console.log(err));
};

const getTopFilms = (
  type: 'TOP_250_BEST_FILMS' | 'TOP_100_POPULAR_FILMS' | 'TOP_AWAIT_FILMS' = 'TOP_250_BEST_FILMS',
  page: number = 1
) => {
  fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/top/?type=${type}&page=${page}`, {
    method: 'GET',
    headers: {
      'X-API-KEY': import.meta.env.VITE_KINOPOISK_KEY,
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then((json) => console.log(json))
    .catch((err) => console.log(err));
};

export const api = {
  getFilmById,
  getTopFilms,
  //getSimilarFilms,
  //getPremiers,
  //getFilters,
  //getFilms, // via filters like 'https://kinopoiskapiunofficial.tech/api/v2.2/films?genres=0&order=RATING&type=ALL&ratingFrom=0&ratingTo=10&yearFrom=1000&yearTo=3000&page=1' \
  //getPersons,
  //getStaff
  //getStaffById
  //getFilmsByKeyword
};