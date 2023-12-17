import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'


function SearchPage() {
  const [searchParams]=useSearchParams();
  const videoId=searchParams.get("s");
  let [searchResponse, setSearchResponse]=useState([])
  const [loadingFlag, setLoadingFlag]=useState(false)
  const renderCount = 3;
  const renderArray = Array.from({ length: renderCount });

  useEffect(()=>{
    function fetchData(){
      setLoadingFlag(true)
      fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q="+videoId+"&key="+process.env.REACT_APP_YOUTUBE_API_KEY)
      .then(async(response)=>{
        const jsonData=await response.json();
        setSearchResponse(jsonData.items);
        setLoadingFlag(false)
      })
      .catch(e=>{
        console.log(e);
        setLoadingFlag(false)
      })
    }
    fetchData();
  },[videoId])

  if(loadingFlag){
    return(
      <div className='flex w-full flex-col gap-4 h-full px-2  pt-6 overflow-y-auto '>
      {renderArray.map((_, index) => (
        <div key={index} className='flex flex-row gap-4 bg-gray-100 w-full h-52'>
            <div className='h-full w-96 bg-gray-200 rounded-t-lg animate-pulse'></div>
            <div className='flex flex-col gap-3 w-full py-3 pr-2'>
              <div className='bg-gray-200 rounded-t-lg animate-pulse w-[90%] h-8'></div>
              <div className='bg-gray-200 rounded-t-lg animate-pulse w-32 h-8'></div>
              <div className='bg-gray-200 rounded-t-lg animate-pulse w-[90%] h-8'></div>
            </div>
          </div>
      ))}
      </div>
    )
  }
  

  return (
    <div className='flex w-full flex-col gap-4 h-full px-2  pt-6 overflow-y-auto '>
      {
        searchResponse && searchResponse.map((data,index)=>(
       (data.id?.videoId) &&   <Link key={index} to={"/watch?v="+data.id?.videoId}>
         <div className='flex flex-col  md:flex-row gap-4'>
            <img className='rounded-lg' src={data.snippet?.thumbnails.medium.url} alt='thumbnail'/>
            <div>
              <h2 className='font-medium overflow-hidden'>{data.snippet?.title}</h2>
              <p>{data.snippet?.channelTitle}</p>
              <p className='text-gray-700 overflow-hidden'>{data.snippet?.description}</p>
            </div>
          </div>
         </Link>
        ))
      }
    </div>
  )
}

export default SearchPage