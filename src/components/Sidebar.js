import React from 'react'
import homeIcon from '../assets/homeIcon.png'
import exploreIcon from '../assets/exploreIcon.png'
import shortsIcon from '../assets/shortsIcon.png'
import subscrptionIcon from '../assets/subscrptionIcon.png'
import libraryIcon from '../assets/libraryIcon.png'
import historyIcon from '../assets/historyIcon.png'
import yourvideosIcon from '../assets/yourvideosIcon.png'
import watchlaterIcon from '../assets/watchlaterIcon.png'
import moviesIcon from '../assets/moviesIcon.png'
import gamingIcon from '../assets/gamingIcon.png'
import liveIcon from '../assets/liveIcon.png'
import fashionIcon from '../assets/fashionIcon.png'
import studyIcon from '../assets/studyIcon.png'
import sportsIocn from '../assets/sportsIcon.png'
import settingIcon from '../assets/settingIcon.png'
import helpIcon from '../assets/helpIcon.png'
import feedbackIcon from '../assets/feedbackIcon.png'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'





function Sidebar() {
  const menuFlag=useSelector(store=>store.app.menuFlag);

  if(!menuFlag) return null;
  // <div className='w-1/5  overflow-y-auto border-r-2 border-gray-200'>

  return (
    <div className='absolute md:relative z-10  md:w-1/5 bg-white  overflow-y-auto border-r-2 border-gray-200'>
         {/* <!-- Group 1 --> */}
      <div className="flex flex-col  pb-4  border-b-2 border-gray-200">
           {/* <!-- home --> */}
       <Link to={"/"}>
       <div className="flex flex-row pl-4  cursor-pointer hover:bg-gray-200 py-2">
          <img src={homeIcon} alt="home-icon"/>
          <h1 className="ml-4">Home</h1>
        </div>
       </Link>
        {/* <!-- explore --> */}
        <div className="flex flex-row mt-2 pl-4  cursor-pointer hover:bg-gray-200 py-2">
          <img src={exploreIcon} alt="explore-icon"/>
          <h1 className="ml-4">Explore</h1>
        </div>
        {/* <!-- shorts --> */}
        <div className="flex flex-row mt-2 pl-4  cursor-pointer hover:bg-gray-200 py-2">
          <img src={shortsIcon} alt="shorts-icon"/>
          <h1 className="ml-4">Shorts</h1>
        </div>
        {/* <!-- subscrption --> */}
        <div className="flex flex-row mt-2 pl-4  cursor-pointer hover:bg-gray-200 py-2">
          <img src={subscrptionIcon} alt="sub-icon"/>
          <h1 className="ml-4">Subscriptions</h1>
        </div>
        </div>
        {/* <!-- Group 2 --> */}
        <div className="flex flex-col  border-b-2 border-gray-200 pb-4">
           {/* <!-- library --> */}
        <div className="flex flex-row mt-2 pl-4  cursor-pointer hover:bg-gray-200 py-2">
          <img src={libraryIcon} alt="library-icon"/>
          <h1 className="ml-4">Library</h1>
        </div>
        {/* <!-- history --> */}
        <div className="flex flex-row mt-2 pl-4  cursor-pointer hover:bg-gray-200 py-2">
          <img src={historyIcon} alt="history-icon"/>
          <h1 className="ml-4">History</h1>
        </div>
        {/* <!-- your videos --> */}
        <div className="flex flex-row mt-2 pl-4  cursor-pointer hover:bg-gray-200 py-2">
          <img src={yourvideosIcon} alt="video-icon"/>
          <h1 className="ml-4">Your Videos</h1>
        </div>
        {/* <!-- watch later --> */}
        <div className="flex flex-row mt-2 pl-4  cursor-pointer hover:bg-gray-200 py-2">
          <img src={watchlaterIcon} alt="watch-icon"/>
          <h1 className="ml-4">Watch Later</h1>
        </div>
        </div>
       {/* <!-- Group-3 Expolre --> */}
       <div className="flex flex-col  border-b-2 border-gray-200 pb-4 pt-4">
        <h1 className='pl-4 '>Explore</h1>
        {/* <!-- Movies --> */}
        <div className="flex flex-row mt-2 pl-4  cursor-pointer hover:bg-gray-200 py-2">
          <img src={moviesIcon} alt="movies-icon"/>
          <h1 className="ml-4">Movies</h1>
        </div>
        {/* <!-- Gaming --> */}
        <div className="flex flex-row mt-2 pl-4  cursor-pointer hover:bg-gray-200 py-2">
          <img src={gamingIcon} alt="gaming-icon"/>
          <h1 className="ml-4">Gaming</h1>
        </div>
        {/* <!-- Live --> */}
        <div className="flex flex-row mt-2 pl-4  cursor-pointer hover:bg-gray-200 py-2">
          <img src={liveIcon} alt="live-icon"/>
          <h1 className="ml-4">Live</h1>
        </div>
        {/* <!-- Fashion & Beauty --> */}
        <div className="flex flex-row mt-2 pl-4  cursor-pointer hover:bg-gray-200 py-2">
          <img src={fashionIcon} alt="fashion-icon"/>
          <h1 className="ml-4">fashion & Beauty</h1>
        </div>
        {/* <!-- Learning --> */}
        <div className="flex flex-row mt-2 pl-4  cursor-pointer hover:bg-gray-200 py-2">
          <img src={studyIcon} alt="study-icon"/>
          <h1 className="ml-4">Learning</h1>
        </div>
        {/* <!-- Sports --> */}
        <div className="flex flex-row mt-2 pl-4  cursor-pointer hover:bg-gray-200 py-2">
          <img src={sportsIocn} alt="sports-icon"/>
          <h1 className="ml-4">Sports</h1>
        </div>
       </div>
       {/* <!-- Group 4 settings --> */}
       <div className="flex flex-col  border-b-2 border-gray-200 pb-4 pt-4">
        {/* <!-- settings --> */}
        <div className="flex flex-row mt-2 pl-4  cursor-pointer hover:bg-gray-200 py-2">
          <img src={settingIcon} alt="setting-icon"/>
          <h1 className="ml-4">Settings</h1>
        </div>
        {/* <!-- Report History --> */}
        <div className="flex flex-row mt-2 pl-4  cursor-pointer hover:bg-gray-200 py-2">
          <img src={historyIcon} alt="history"/>
          <h1 className="ml-4">Report History</h1>
        </div>
        {/* <!-- Help --> */}
        <div className="flex flex-row mt-2 pl-4  cursor-pointer hover:bg-gray-200 py-2">
          <img src={helpIcon} alt="help-icon"/>
          <h1 className="ml-4">Help</h1>
        </div>
        {/* <!-- Send Feedback --> */}
        <div className="flex flex-row mt-2 pl-4  cursor-pointer hover:bg-gray-200 py-2">
          <img src={feedbackIcon} alt="feedback-icon"/>
          <h1 className="ml-4">Send Feedback</h1>
        </div>
      </div>
    </div>
  )
}

export default Sidebar