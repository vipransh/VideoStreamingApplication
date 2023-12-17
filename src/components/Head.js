import React from 'react'
import menuImg from '../assets/icons8-menu-rounded-50.png'
import logo from '../assets/youtubeLogo.png'
import searchIcon from '../assets/icons8-search-50.png'
import microphoneIocn from '../assets/icons8-microphone-24.png'
import videoIcon from '../assets/videoIcon.png'
import bellIcon from '../assets/bellIcon.png'
import userIcon from '../assets/icons8-male-user-50.png'
import { useDispatch, useSelector } from 'react-redux'
import { toogleMenu } from '../utils/appSlice'
import SearchSection from './SearchSection'







function Head (){
  const dispatch=useDispatch() 
  const suggestions=useSelector(state=>state.search.suggestion)


    const videoSearchHandler=async(key)=>{
      window.location.href = '/search?s=' +key;
  }
  
  


  const toogleMenuHandler=()=>{
    dispatch(toogleMenu());
  }

  return (
    <div className='w-full flex flex-row items-center justify-between px-4 py-2  '>
      <div className='flex w-1/6'>
      <img onClick={()=>toogleMenuHandler()} className='h-6 cursor-pointer' src={menuImg} alt='menu'/>
       <a href='/'><img className='hidden md:flex h-6 ml-4' src={logo} alt='logo'/></a>
      </div>
      <div className='flex flex-col w-2/3 items-center'>
        <div className='flex w-full items-center justify-center'>
        <SearchSection/>
        <button className='p-2 border border-gray-300 rounded-r-full px-4'>
          <img className='h-6' src={searchIcon} alt='search-icon'/>
        </button>
        <img className='h-6 ml-4 cursor-pointer' src={microphoneIocn} alt="microphone" />
        </div>
        {
          suggestions.length>=1? <div className='fixed w-[39%] bg-white mt-11 mr-24 border border-gray-200 rounded-xl z-10'>
          <ul className='py-2'>
            {
              suggestions.length>=1? suggestions.map((data,index)=>(
               <li key={index} onClick={()=>videoSearchHandler(data)} className='px-4 flex flex-row items-center gap-2 cursor-pointer hover:bg-gray-200' ><img className='h-4' src={searchIcon} alt='search-icon'/>{data}</li>
              )): ""
            }
          </ul>
        </div>: ""
        }
      </div>
      <div className='flex md:w-1/6 items-center justify-end gap-3'>
      <img className='hidden md:flex cursor-pointer' src={videoIcon} alt='video-icon'/>
      <img className='hidden md:flex cursor-pointer' src={bellIcon} alt='bell-icon'/>
      <img className='h-6 cursor-pointer' src={userIcon} alt='user-icon'/>
      </div>
    </div>
  )
}

export default Head