import http from "./httpService";
import config from "../config.json"

export function getMovies() {
  return http.get(config.apiUrl + "/movies");
}


export function deleteMovie(id) {
  return http.delete(`${config.apiUrl}/movies/${id}`);
}
