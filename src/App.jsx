import { useState, useEffect } from "react";
import logo from "./assets/logo.png";
import { getGenres, Loadmovies, searchMovies} from "./api/api";
import { Sort_Options } from "./constants/SortOptions";
import MovieCard from "./components/MovieCard";

function App() {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [sortBy,setSortBy]=useState("popularity.desc");
  const [searchQuery,setSearchQuery]=useState("");
  const [genreId,setGenreId]=useState("");

  useEffect(() => {
    const loadGenres = async () => {
      try {
        const data = await getGenres();
        setGenres(data);
      } catch (error) {
        console.log("Failed to load genres", error);
      }
    };
    loadGenres();
  }, []);

   useEffect(() => {

    if (!genreId) return;

    const loadMovies = async () => {
      try {
        const data = await Loadmovies(genreId,sortBy);
        setMovies(data);
      } catch (error) {
        console.error("Failed to load movies", error);
      }
    };

    loadMovies();
  }, [genreId,sortBy]);


  const handleSearch=async(searchTerm)=>{
    const data=await searchMovies(searchTerm);
    setMovies(data);
  }

  return (
    <div className="min-h-screen bg-gray-950 bg-linear-to-br from-gray-950 via-slate-900 to-indigo-950 text-white">
      <header className="flex items-center justify-between px-10">
        <div>
          <img className="w-auto h-30" src={logo} alt="logo" />
        </div>
        <div className="flex gap-5 w-2/3">
          <div className="flex gap-3 w-full h-8">
            <input
              className="bg-white w-full rounded-md px-4 py-2 text-black caret-red-500"
              type="text"
              value={searchQuery}
              onChange={(e)=>setSearchQuery(e.target.value)}
              onKeyDown={(e)=>{
                if(e.key==="Enter")
                {
                  handleSearch(searchQuery);
                }
              }}
            />
            <button className="bg-red-600 hover:bg-red-700 px-3 rounded-md active:scale-95"
              onClick={()=>handleSearch(searchQuery)}
            >
              Search
            </button>
          </div>

          <div className="flex items-center gap-3">
            <label
              className="text-gray-200 font-medium whitespace-nowrap"
              htmlFor="sort"
            >
              Sort by :
            </label>
            <select
              className="bg-gray-800 text-white border border-gray-700 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={sortBy}
              onChange={(e)=>setSortBy(e.target.value)}
              id="sort"
            >
              {Sort_Options.map((option)=>(
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </select>
          </div>

          <div className="flex items-center gap-3">
            <label
              className="text-gray-200 font-medium whitespace-nowrap"
              htmlFor="genre"
            >
              genre :
            </label>
            <select
              className="bg-gray-800 text-white border border-gray-700 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e)=>setGenreId(e.target.value)}
              id="genre"
            >
              <option value="" value="All genres">All Genres</option>
              {genres.map((genre) => (
                <option key={genre.id} value={genre.id}>
                  {genre.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </header>
      <div className="w-full grid grid-cols-1
  sm:grid-cols-2
  md:grid-cols-3
  lg:grid-cols-5
  gap-4 p-3">
          {movies.map((movie) => (
            <MovieCard key={movie.id} details={movie}/>
          ))}
      </div>
    </div>
  );
}

export default App;
