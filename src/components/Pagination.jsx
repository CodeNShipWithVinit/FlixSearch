const Pagination = ({
  totalMovies,
  moviesAPage,
  currentPage,
  setCurrentPageNo,
}) => {
  const pages = [];
  const totalPages = Math.ceil(totalMovies / moviesAPage);
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <div className="flex justify-center items-center">
       <button
        className=" bg-gray-800
  hover:bg-gray-700
  text-white
  border
  border-gray-700
  px-4
  py-2
  m-2
  rounded-md
  cursor-pointer
  transition"
        onClick={() => currentPage > 1 && setCurrentPageNo((prev) => prev - 1)}
      >
        Previous
      </button>
      {pages.map((page) => {
        return (
          <button
            className={`${
              currentPage === page
                ? "bg-red-600 text-white"
                : "bg-gray-800 hover:bg-gray-700 text-white border border-gray-700"
            } px-4 py-2 m-2 rounded-md cursor-pointer transition`}
            key={page}
            onClick={() => {
              setCurrentPageNo(page);
            }}
          >
            {page}
          </button>
        );
      })}
      <button
        className=" bg-gray-800
  hover:bg-gray-700
  text-white
  border
  border-gray-700
  px-4
  py-2
  m-2
  rounded-md
  cursor-pointer
  transition"
        onClick={() =>
          currentPage < totalPages && setCurrentPageNo((prev) => prev + 1)
        }
      >
        Next
      </button>
      
    </div>
  );
};

export default Pagination;
