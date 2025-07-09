import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

const Movie = () => {
  const { id } = useParams();
  // console.log(id)

  const [movieData, setMovieData] = useState({});

  // console.log(movieData)

  const api = import.meta.env.VITE_URL;

  // console.log(api)

  async function getMovie() {
    const url = api + "&i=" + id;
    console.log(url)

    const res = await axios.get(url);
    console.log(res)
    setMovieData(res.data)
  }

  useEffect(() => {
    getMovie()
  }, [])
  return (
    <div className='max-w-8xl mx-auto h-screen flex  items-center bg-gray-900'>
      <div className=' w-full shadow-2xl flex gap-2 p-5'>
        <div className="w-full md:w-1/3 flex justify-center">
          <img src={movieData.Poster} alt="" className="w-full max-w-xs rounded-xl object-cover shadow-lg" />
        </div>
        <div className='flex flex-col justify-center gap-1 w-full md:w-1/3 text-gray-700 text-lg'>
          <p className='text-white font-bold'>
            <strong className='text-red-500'>🎬Title :</strong>{movieData.Title}
          </p>
          <p className='text-white font-bold'>
            <strong className='text-red-500'>🎥Director :</strong>{movieData.Director}
          </p>
          <p className='text-white font-bold'>
            <strong className='text-red-500'>📅Year :</strong>{movieData.Year}
          </p>
          <p className='text-white font-bold'>
            <strong className='text-red-500'>🗓Released Date :</strong>{movieData.Released}
          </p>
          <p className='text-white font-bold'>
            <strong className='text-red-500'>🌐Languages :</strong>{movieData.Language}
          </p>
          <p className='text-white font-bold'>
            <strong className='text-red-500'>🏳Country :</strong>{movieData.Country}
          </p>
        </div>

      </div>

    </div>
  )
}

export default Movie
