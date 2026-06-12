import axios from "axios";

export const BASE_URL=`https://api.themoviedb.org/3`;

export const options={
    headers:{
        accept:'application/json',
        Authorization:`Bearer ${import.meta.env.VITE_TMDB_TOKEN}`
    },
};

export const getGenres=async()=>{
    const response=await axios.get(`${BASE_URL}/genre/movie/list`,options);
    return response.data.genres;
}

export const Loadmovies=async(genreId,sortBy)=>{
    const response=await axios.get(`${BASE_URL}/discover/movie`,
        {
            ...options,
            params:{
            with_genres:genreId,
            sort_by:sortBy
            }
        }
    )
    console.log(response.data);
    return response.data.results;
}

export const searchMovies=async(searchTerm)=>{

    if (!searchTerm.trim()) {
        return;
    }
    const response=await axios.get(`${BASE_URL}/search/movie`,
          {
            ...options,
            params:{
              query:searchTerm
            }
          }
        )
    return response.data.results;
}

