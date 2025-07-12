import React , { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router';

const Movies = () => {

    const [moviesData, setMoviesData] = useState([]);
    const [search, setSearch] = useState("all");

    const navigate = useNavigate();

    // console.log(search)

    const api = import.meta.env.VITE_URL;

    // console.log(moviesData)

    async function getMovies() {
        const url = api + "&s=" + search;
        const response = await axios.get(url);
        setMoviesData(response.data.Search)
    }
    useEffect(() => {
        getMovies()
    }, [])

    function handleClick() {
        getMovies()
    }


    return (
        <>
         <header className="bg-white shadow-md py-4 px-6 md:px-10 w-full fixed top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo or Title */}
        <h1 className="text-2xl md:text-3xl font-bold text-red-600 tracking-wide">
          🎬 MovieZone
        </h1>

        {/* Navigation or Buttons */}
        <nav className="hidden md:flex space-x-6 text-gray-700 text-lg font-medium">
          <a href="/" className="hover:text-red-500 transition">Home</a>
          <a href="/" className="hover:text-red-500 transition">Favorites</a>
          <a href="/" className="hover:text-red-500 transition">About</a>
        </nav>

      </div>
    </header>
        
        <div className='max-w-10xl '>
            <div className='w-full flex justify-center my-17 px-8 '>
                <input
                    type="search"
                    placeholder='Search...'
                    className='border p-2 w-1/2 rounded text-1xl'
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button
                    className='bg-orange-600 rounded p-2 ml-2 text-white text-1xl'
                    onClick={handleClick}
                >
                    Search
                </button>
            </div>
            <div className='max-w-7xl mx-auto px-2  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 '>
                {moviesData?.length > 0 ? (moviesData.map((ele) =>
                    <div
                        key={ele.imdbID}
                        onClick={() => navigate(`/movie/${ele.imdbID}`)}
                        className="shadow-1xl rounded-4xl overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer bg-white"
                    >
                        <img src={ele.Poster} alt={ele.Title} className="w-full h-[250px] " />
                        <div className="p-1 space-y-2  ">
                        <p>
                            <strong  className='text-green-500  '> Title :</strong> {ele.Title}
                        </p>
                        <p>
                            <strong className='text-green-500'> Year :</strong> {ele.Year}
                        </p>
                        <p>
                            <strong className='text-green-500'> Type :</strong> {ele.Type}
                        </p>
                    </div>
                    </div>
                )) : (<p className='text-red-600 col-span-full text-center'>" {search} " movie is not found...</p>)}
            </div>
            </div>
        </>
    )
}

export default Movies
