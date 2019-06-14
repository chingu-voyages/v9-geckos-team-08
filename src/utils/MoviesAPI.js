const axios = require('axios');
const CONFIG = require('./config')

const API_URL = process.env.TMDB_API_URL || CONFIG.API_URL;
const API_KEY = process.env.TMDB_API_KEY || CONFIG.API_KEY;

const defaults = {
    method : 'get',
    api_key: API_KEY,
    include_adult: false,
    language : 'en-US',
    region: 'us'
}

// get titles out in theatres
export const getPlayingNowTitles = async (page=1, type='/movie/now_playing') => {
    let headers = {...defaults,
                    page};
    let response = await axios({ url: `${API_URL}${type}`, params : headers})

    return response.data.results;    
}

// get detailed information on a title.
export const getDetailTitle =  async (movieID, api_type='/movie') => {
    let header = {
        api_key : API_KEY,
        language: defaults['language']
    }
    let title = await axios({ url : `${API_URL}${api_type}/${movieID}`,
                              params :header});

    return title.data;
}

// builds link to poster
export const getPosterURL = (posterPath, size= 'w500') => `https://image.tmdb.org/t/p/${size}${posterPath}`;