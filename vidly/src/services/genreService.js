import http from "./httpService";
import apiUrl from "../config.json"

const apiEndpoint = apiUrl.apiUrl + "/genres"



 export function getGenres()  {
    return http.get(apiEndpoint);

  }
