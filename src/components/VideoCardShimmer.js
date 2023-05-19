import React from 'react'

function VideoCardShimmer() {
  return (
    <div className='w-56 h-52 mb-4 bg-gray-100 '>
        <div className='w-full h-[70%] bg-gray-200 rounded-t-lg animate-pulse'></div>
        <div className='w-full px-1 py-1 mt-2'>
         <div className='w-full bg-gray-200 h-5 animate-pulse'></div>
         <div className='w-24 bg-gray-200 h-4 mt-1 animate-pulse'></div>
        </div>
      </div>
  )
}

export default VideoCardShimmer