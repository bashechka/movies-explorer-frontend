class MoviesApi {
  constructor({ url, headers }) {
    this._url = url;
    this._headers = headers
  }

  getMovies() {
    return fetch(`${this._url}`, {
      method: 'GET',
      headers: this._headers
    })
      .then(this._checkResponse);
  }

  _checkResponse(response) {
    return response
      .json()
      .then((data) => {
        if (data.message !== undefined) {
          return Promise.reject(new Error(data.message));
        }
        return data;
      })
  }
}

const moviesApi = new MoviesApi({
  url: "https://api.nomoreparties.co/beatfilm-movies",
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }
});

export default moviesApi;
