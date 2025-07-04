import React, { useEffect, useState } from 'react'

function Home() {
    const [data,setData] = useState([]);
   useEffect(() =>{
    async function getData(){
        const resp = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await resp.json();
        setData(data)
    }
    getData()
   },[])
  return (
    <div>
      < h1 className='text-center my-5 font-bold text-red-500'>This is my home page</h1>
      <div>
        <ul className='max-w-5xl mx-auto flex flex-wrap justify-center gap-4'>
            {data.map((ele)=>

            <li className='w-[200px] bg-green-200 border'>{ele.title}</li>
            )}
        </ul>
      </div>
    </div>
  )
}

export default Home
