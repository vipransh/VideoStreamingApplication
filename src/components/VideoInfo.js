import React,{useEffect,useState} from 'react'
import { Video_Info_Api } from '../config/apiConfig'
import bellIcon from '../assets/bellIcon.png'
import likeIocn from '../assets/likeIcon.png'
import shareIocn from '../assets/icons8-share-24.png'
import channelIocn from '../assets/channelIcon.png'
import threeDots from '../assets/icons8-three-dots.png'

function VideoInfo({videoId}) {
    const [info,setInfo]=useState("")

    useEffect(()=>{
        const getVideoInfo=async()=>{
          const data=await fetch(Video_Info_Api+"&id="+videoId)
          const json=await data.json();
          setInfo(json.items[0]);
          console.log("res",json.items[0]);
        }
        getVideoInfo();
      },[videoId])


  return (
    <div className='mt-4 w-full md:w-[65%] '>
        <h2 className='font-bold'>{info && info.snippet?.title}</h2>
        <div className='mt-3 flex flex-row justify-between items-center'>
        <div className='flex flex-row items-center '>
        <img src={channelIocn} alt='logo'/>
            <div>
            <h3 className='font-bold'>{info && info.snippet?.channelTitle}</h3>
            <p className='font-medium'>4M</p>
            </div>
            <div className="flex flex-row items-center ml-1 md:ml-8 " >
                  <div className="bg-[#E21717] px-3 py-1 rounded-3xl cursor-pointer subscibe-div"><h2 className="subscibe-text text-white text-xs md:text-lg">Subscribe</h2></div>
                  <img className="w-5 md:w-6 h-5 md:h-6 ml-1 md:ml-2 cursor-pointer" src={bellIcon} alt="bell-icon"/>
             </div>
        </div>
        <div className="flex flex-row items-center ">
                <div className="flex flex-row bg-[#E7E9EB] px-4 py-2 rounded-3xl cursor-pointer">
                  <img className=" cursor-pointer" src={likeIocn} alt="like-icon"/>
                  <h2 className="ml-1 md:ml-2 text-xm md:text-lg">142</h2>
                </div>
                <div className="hidden md:flex flex-row items-center bg-[#E7E9EB] px-3 py-2 rounded-3xl ml-2 cursor-pointer">
                  <img className="w-3 md:w-5" src={shareIocn} alt="share-icon"/>
                  <h2 className="ml-1 md:ml-2 text-xs md:text-lg">Share</h2>
                </div>
                <div className="bg-[#E7E9EB] px-3 hidden md:flex items-center py-3 rounded-3xl ml-2 cursor-pointer"><img className="w-5" src={threeDots} alt="dot-icon"/></div>
        </div>
        </div>
    </div>
  )
}

export default VideoInfo