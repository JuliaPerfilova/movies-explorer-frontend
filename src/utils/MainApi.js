import {API_URLS} from "./constants.js";

class MainApi {
  constructor(options) {
    this._url = options.BASE_URL;
    this._movies_url = options.MOVIES_URL;
  }

  setToken(token) {
    this._authorization = `Bearer ${token}`;
  }

  removeToken() {
    delete this._authorization;
  }

  _makeRequest({url, method, contentType, body, authorized}) {
    const requestInfo = {
      headers: {},
    };
    if (authorized && this._authorization !== undefined) {
      requestInfo.headers.authorization = this._authorization;
    }

    if (method !== undefined) {
      requestInfo.method = method;
    }

    if (contentType !== undefined) {
      requestInfo.headers['Content-Type'] = contentType;
    }

    if (body !== undefined) {
      requestInfo.body = body;
    }

    return fetch(url, requestInfo)
      .then(res => res.ok
          ? res.json()
          : res.json().then((resJson) => Promise.reject(resJson.message))
      );
  }

  getMyProfile() {
    return this._makeRequest({
      url: `${this._url}/users/me`,
      authorized: true
    });
  }

  updateProfile(userInfo) {
    return this._makeRequest({
      url: `${this._url}/users/me`,
      method: 'PATCH',
      contentType: 'application/json',
      body: JSON.stringify(userInfo),
      authorized: true
    });
  }

  getMyMovies() {
    return this._makeRequest({
      url: `${this._url}/movies`,
      authorized: true
    });
  }

  saveMovie(data) {
    return this._makeRequest({
      url: `${this._url}/movies`,
      method: 'POST',
      contentType: 'application/json',
      body: JSON.stringify(data),
      authorized: true
    });
  }

  deleteMovie(id) {
    return this._makeRequest({
      url: `${this._url}/movies/${id}`,
      method: 'DELETE',
      authorized: true
    });
  }

  register(name, email, password) {
    console.log(`${this._url}/signup`);
    return this._makeRequest({
      url: `${this._url}/signup`,
      method: 'POST',
      contentType: 'application/json',
      body: JSON.stringify({name, email, password}),
      authorized: false
    });
  }

  authorize(email, password) {
    return this._makeRequest({
      url: `${this._url}/signin`,
      method: 'POST',
      contentType: 'application/json',
      body: JSON.stringify({email, password}),
      authorized: false
    });
  };

}

const api = new MainApi(API_URLS);

export default api;
