const axios = require('axios');
const CONFIG = require('./config');

const API_URL = process.env.TMDB_API_URL || CONFIG.API_URL;
const API_KEY = process.env.TMDB_API_KEY || CONFIG.API_KEY;

const defaults = {
  method: 'get',
  api_key: API_KEY,
  include_adult: false,
  language: 'en-US',
  region: 'us',
};

// get titles out in theatres
export const getPlayingNowTitles = async (page = 1, type = '/movie/now_playing') => {
  const headers = { ...defaults, page };
  const response = await axios({ url: `${API_URL}${type}`, params: headers });

  return response.data.results;
};

// get detailed information on a title.
export const getDetailTitle = async (movieID, apiType = '/movie') => {
  const header = {
    api_key: API_KEY,
    language: defaults.language,
  };

  const title = await axios({
    url: `${API_URL}${apiType}/${movieID}`,
    params: header,
  });

  return title.data;
};

// builds link to poster
export const getPosterURL = (posterPath, size = 'w500') => `https://image.tmdb.org/t/p/${size}${posterPath}`;

// return a list of search specific titles.
export const getSpecificTitles = async (searchStr) => {
  const header = {
    ...defaults,
    query: searchStr,
  };

  const data = await axios({
    url: 'https://api.themoviedb.org/3/search/movie',
    params: header,
  });
  return data.data.results;
};

/*
 * @func: query API for titles release after today(future releases).
 *
 * @param: page - default page 1, future features may need additional data.
 *
 * @return: array of objects.
 *
 * @Comment: API may query past titles. The filter prior to
 *           the return will prevent past titles from
 */
export const getUpcomingTitles = async (page = 1) => {
  const today = new Date();
  const todayISOFormat = today.toISOString(); // "2019-06-26T19:06:26.942Z"
  const todayISO = todayISOFormat.split('T')[0]; // "2019-06-26"

  const response = await axios({
    url: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&region=US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&primary_release_date.gte=${todayISO}&release_date.gte=${todayISO}`,
  });
  return response.data.results.filter(title => title.release_date >= todayISO);
};
