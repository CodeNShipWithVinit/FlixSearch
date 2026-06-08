import { useState, useEffect } from "react";
import logo from "./assets/logo.png";
import { getPopularMovies, getGenres } from "./api/api";
import { Sort_Options } from "./constants/SortOptions";

function App() {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [sortBy,setSortBy]=useState("popularity.desc");

  useEffect(() => {
    const loadMovies = async () => {
      try {
        const data = await getPopularMovies();
        setMovies(data);
      } catch (error) {
        console.error("Failed to load movies", error);
      }
    };

    loadMovies();
  }, []);

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

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <header className="flex items-center gap-70 px-10">
        <div>
          <img className="w-auto h-30" src={logo} alt="logo" />
        </div>
        <div className="flex gap-5 w-2/3">
          <div className="flex gap-3 w-full h-8">
            <input
              className="bg-white w-full rounded-md p-0 text-black"
              type="text"
            />
            <button className="bg-red-600 hover:bg-red-700 px-2 rounded-md active:scale-95">
              Search
            </button>
          </div>

          <div className="flex items-center gap-3">
            <label
              className="text-gray-200 font-medium whitespace-nowrap"
              htmlFor=""
            >
              Sort by :
            </label>
            <select
              className="bg-gray-800 text-white border border-gray-700 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={sortBy}
              onChange={(e)=>setSortBy(e.target.value)}
              name=""
            >
              {Sort_Options.map((option)=>(
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </select>
          </div>

          <div className="flex items-center gap-3">
            <label
              className="text-gray-200 font-medium whitespace-nowrap"
              htmlFor=""
            >
              genre :
            </label>
            <select
              className="bg-gray-800 text-white border border-gray-700 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              name=""
              id=""
            >
              {genres.map((genre) => (
                <option key={genre.id} value={genre.id}>
                  {genre.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </header>
      {/* <div>
        {movies.map((movie) => (
          <h3 className="text-white" key={movie.id}>
            {movie.title}
          </h3>
        ))}
      </div> */}
    </div>
  );
}

export default App;
