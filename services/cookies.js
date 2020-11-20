import Cookies from 'js-cookie';

export const addCookie = (data, category) => {
  const cat = category === 'tv shows' ? 'tv' : category;
  const prevValues = Cookies.get(cat);
  if (prevValues) {
    const favoritesTab = JSON.parse(prevValues);
    let isNotFavoriteYet = true;
    favoritesTab.forEach((movie) => {
      if (data.id === movie.id) {
        isNotFavoriteYet += true;
      } else {
        isNotFavoriteYet += false;
      }
    });
    if (isNotFavoriteYet === 1) {
      favoritesTab.push(data);
      Cookies.set(cat, JSON.stringify(favoritesTab));
    }
  } else {
    Cookies.set(cat, `[${JSON.stringify(data)}]`);
  }
};

export const getMoviesCookies = () => {
  const movies = Cookies.get('movie');
  return movies;
};

export const getTvShowsCookies = () => {
  const tvShows = Cookies.get('tv');
  return tvShows;
};
