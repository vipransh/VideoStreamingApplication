import React,{useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice'
import { useSearchParams } from 'react-router-dom'
import VideoInfo from './VideoInfo'
import TopComments from './TopComments'
import { useSelector } from 'react-redux'
import LiveChatSection from './LiveChatSection'

function WatchPage() {
  const dispatch=useDispatch()
  const menuFlag=useSelector(store=>store.app.menuFlag);
  const [searchParams]=useSearchParams();
  const videoId=searchParams.get("v");


  useEffect(()=>{
    dispatch(closeMenu());
  },[dispatch])


  if(!menuFlag){
    return (
      <div className="px-4 py-4 h-[96%] overflow-y-auto">
       <div className='w-full flex gap-8'>
       <iframe width="800" height="400"
         src={"https://www.youtube.com/embed/"+videoId} 
         title="YouTube video player" frameBorder="0" 
         allow="accelerometer;  autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen></iframe>
        <LiveChatSection/>
       </div>
        <VideoInfo videoId={videoId}/>
        <TopComments videoId={videoId}/>
      </div>
    )
  }


  if(menuFlag){
    return (
      <div className="px-4 py-4 w-[80%]  h-[96%] overflow-y-auto">
        <div className='flex w-full'>
        <iframe width="800" height="400"
         src={"https://www.youtube.com/embed/"+videoId} 
         title="YouTube video player" frameBorder="0" 
         allow="accelerometer;  autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen></iframe>
        </div>
        <VideoInfo videoId={videoId}/>
        <TopComments videoId={videoId}/>
      </div>
    )
  }
}

export default WatchPage