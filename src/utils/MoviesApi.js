import {API_URLS} from "./constants.js";

export function getMovies() {
  return fetch(API_URLS.MOVIES_URL)
    .then(res => res.ok
      ? res.json()
      : Promise.reject(`Ошибка: ${res.status}`)
    );
}


