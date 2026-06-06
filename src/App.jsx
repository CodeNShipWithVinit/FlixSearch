import {useState,useEffect} from "react";
import logo from './assets/logo.png'
import { getPopularMovies } from './api/api';

function App() {
   const [movies, setMovies] = useState([]);

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


  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <header className='flex items-center gap-70 px-10'>
        <div>
             <img className="w-auto h-30" src={logo} alt="logo" />
        </div>
       <div className='flex gap-5 w-1/2'>
          <div className='flex gap-3 w-full h-8'>
            <input className="bg-white w-full rounded-md p-0" type="text" />
            <button className='bg-red-600 hover:bg-red-700 px-2 rounded-md active:scale-95'>Search</button>
          </div>
          
          <div className='flex gap-5'>
            <label htmlFor="">Search by:</label>
            <select name="" id="">
              <option value="">Haunted</option>
              <option value="">Comic</option>
              <option value="">RomCom</option>
            </select>
          </div>
       </div>
      </header>
      <div>
      {movies.map((movie) => (
        <h3 className="text-white" key={movie.id}>{movie.title}</h3>
      ))}
    </div>
    </div>
  );
}


export default App;