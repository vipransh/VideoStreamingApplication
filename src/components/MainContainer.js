import React from 'react'
import UserInterestList from '../components/UserInterestList'
import VideoContainer from '../components/VideoContainer'
import { useSelector } from 'react-redux'


function MainContainer() {
  const menuFlag=useSelector(store=>store.app.menuFlag);

   if(!menuFlag){
    return (
      <div className='w-[100%] px-2 py-2 h-[96%]'> 
      <UserInterestList/>
      <VideoContainer/>
      </div>
    )
   }
   if(menuFlag){
    return (
      <div className='w-[100%] md:w-[80%] px-2 py-2 h-[96%]'> 
      <UserInterestList/>
      <VideoContainer/>
      </div>
    )
   }
}

export default MainContainer