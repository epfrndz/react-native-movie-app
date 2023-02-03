import axios from "axios";
import { API_KEY } from "../config/api_config";

export const getMoviesList = async (queryName) => {
  const getMoviesListAxios = axios.create({})
  const url = `https://api.themoviedb.org/3/${queryName}?api_key=${API_KEY}&language=en-US&page=1`
  // console.log(url)
  const response = await getMoviesListAxios.get(url, {})
  const movieList = response.data.results

  // console.log(movieList)
  return movieList
}

export const getMovie = async (movieID) => {
  const getMovieAxios = axios.create({})
  const url = `https://api.themoviedb.org/3/movie/${movieID}?api_key=${API_KEY}&language=en-US`
  // console.log('Movie URL >>', url)
  const response = await getMovieAxios.get(url, {})
  // console.log(response.data)
  return response.data
}

export const getTVList = async (queryName) => {
  const getTVListAxios = axios.create({})
  const url = `https://api.themoviedb.org/3/${queryName}?api_key=${API_KEY}&language=en-US&page=1`
  // console.log('TV URL >>>', url)
  const response = await getTVListAxios.get(url, {})
  const tvList = response.data.results
  // console.log('TV Reponse >>>', tvList)
  return tvList
}

export const getTV = async (tvID) => {
  const getTVAxios = axios.create({})
  const url = `https://api.themoviedb.org/3/tv/${tvID}?api_key=${API_KEY}&language=en-US`
  const response = await getTVAxios.get(url, {})
  return response.data
}

export const getSearchList = async (query, type) => {
  const getSearchAxios = axios.create({})
  const url = `https://api.themoviedb.org/3/${type}?api_key=${API_KEY}&language=en-US&query=${encodeURIComponent(query)}&page=1&include_adult=false`
  const response = await getSearchAxios.get(url, {})
  const filteredResponse = response.data.results.filter(obj => !obj.hasOwnProperty('profile_path'))
  return filteredResponse
}