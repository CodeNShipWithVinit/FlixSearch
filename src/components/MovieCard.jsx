
const MovieCard = ({details}) => {
  return (
    <div className="bg-white/5 shadow-lg backdrop-blur-md border border-white/10 rounded-md flex flex-col text-center overflow-hidden gap-10">
        <div className="aspect-2/3 shrink-0">
            <img src={`https://image.tmdb.org/t/p/w500${details.poster_path}`} alt={details.title}  className="w-full h-full object-cover"/>
        </div>
        
        <div className="flex flex-col gap-5 p-3">
            <h1 className="text-xl font-bold">{details.title}</h1>
            <p className="line-clamp-3 text-gray-400">{details.overview}</p>
        </div>
       console.log("Debugging");;
    </div>
  )
}

export default MovieCard

