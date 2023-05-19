import React,{useEffect,useState} from 'react'
import VideoCard from './VideoCard'
import { Youtube_Video_Api } from '../config/apiConfig'
import { Link } from 'react-router-dom';
import VideoCardShimmer from './VideoCardShimmer';


function VideoContainer() {
  const [videoList, setVideoList]=useState([]);
  const [loadingFlag, setLoadingFlag]=useState(false)
  const renderCount = 8;
  const renderArray = Array.from({ length: renderCount });

  const fetchVideo=()=>{
    setLoadingFlag(true)
     fetch(Youtube_Video_Api)
     .then(async(response)=>{
      const json=await response.json();
      console.log(json.items);
      setVideoList(json.items);
      setLoadingFlag(false)
     })
     .catch(e=>{
      console.log(e);
      setLoadingFlag(false)
     })
  }

  useEffect(()=>{
    fetchVideo();
  },[])

  if(loadingFlag){
   return (
    <div className='flex flex-wrap h-full  justify-between  pt-6 overflow-y-auto '>
    {renderArray.map((_, index) => (
      <VideoCardShimmer key={index}/>
      ))}
  </div>
   )
  }

  return (
    <div className='flex flex-wrap h-full  justify-between  pt-6 overflow-y-auto '>
     {
      videoList&& videoList.map((data)=>(
      <Link key={data.id} to={"/watch?v="+data.id}>
      <VideoCard data={data}/>
      </Link>
     ))}
    </div>
  )
}

export default VideoContainer