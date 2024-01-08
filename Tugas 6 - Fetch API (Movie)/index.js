const api = 'http://www.omdbapi.com/?apikey=52da5df0&t=fast+%26+furious';

film = () => {
  fetch(api)
    .then((response) => response.json())
    .then((data) => {
      const theFilm = data;

      document.querySelector('#poster').src = theFilm.Poster;
      document.querySelector('#title').textContent = theFilm.Title;
      document.querySelector('#released').textContent = theFilm.Released;
      document.querySelector('#genre').textContent = theFilm.Genre;
      document.querySelector('#director').textContent = theFilm.Director;
      document.querySelector('#writer').textContent = theFilm.Writer;
      document.querySelector('#language').textContent = theFilm.Language;
      document.querySelector('#country').textContent = theFilm.Country;
    });
};

film();
