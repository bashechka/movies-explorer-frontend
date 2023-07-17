class MainApi {
  constructor({ url, headers }) {
    this._url = url;
    this._headers = headers
  }

  signIn(data) {
    return fetch(`${this._url}/signin`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(data)
    })
      .then(this._checkResponse);
  }

  signUp(data) {
    return fetch(`${this._url}/signup`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(data)
    })
      .then(this._checkResponse);
  }

  getUserInfo() {
    return fetch(`${this._url}/users/me`, {
      method: 'GET',
      headers: this._headers
    })
      .then(this._checkResponse);
  }

  updateUserProfile(data) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify(data)
    })
      .then(this._checkResponse);
  }

  createMovie(data) {
    return fetch(`${this._url}/movies`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(data)
    })
      .then(this._checkResponse);
  }

  deleteMovie(movieId) {
    return fetch(`${this._url}/movies/${movieId}`, {
      method: 'DELETE',
      headers: this._headers
    })
      .then(this._checkResponse);
  }

  getMovies() {
    return fetch(`${this._url}/movies`, {
      method: 'GET',
      headers: this._headers
    })
      .then(this._checkResponse);
  }

  setToken(token) {
    this._headers.Authorization = `Bearer ${token}`;
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

const mainApi = new MainApi({
  // url: 'http://127.0.0.1:3000',
  url: 'https://api.bashechka.nomoredomains.work',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }
});

export default mainApi;
