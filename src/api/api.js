import axios from "axios";

const BASE_URL=`https://api.themoviedb.org/3`;

const options={
    headers:{
        accept:'application/json',
        Authorization:`Bearer ${import.meta.env.VITE_TMDB_TOKEN}`
    },
};

export const getPopularMovies=async()=>{

    const response=await axios.get(`${BASE_URL}/movie/popular`,options);
    console.log(response.data);
    return response.data.results;
}

export const getGenres=async()=>{
    const response=await axios.get(`${BASE_URL}/genre/movie/list`,options);
    console.log(response.data);
    return response.data.genres;
}

export const getSortBy=async()=>{
    
}