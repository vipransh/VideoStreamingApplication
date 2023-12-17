import React from 'react'

function VideoCard({data}) {
  // console.log("datta",data);
    const image=data.snippet?.thumbnails.medium.url;
    // const channelId=data.contentDetails?.id;
    const title=data.snippet?.title;
    const channelTitle=data.snippet?.channelTitle;
    let views=data.statistics?.viewCount;
    if (views >=1000) {
      var units = ["K", "M", "B", "T"];
      
      var order = Math.floor(Math.log(views) / Math.log(1000));
  
      var unitname = units[(order - 1)];
      var num = Math.floor(views / 1000 ** order);
      
      // output number remainder + unitname
      views=num + unitname
    }
    
  return (
    <div className='w-92 md:w-56   mb-4'>
        <img className='rounded-t-lg w-full object-fill md:w-auto ' src={image} alt='thumbnail'/>
        <div>
        <h3 className='font-bold mt-2'>{title.length>50? title.slice(0,49)+"...": title}</h3>
        <p className='text-xs text-gray-600 mt-2 font-medium'>{channelTitle}</p>
        <p className='text-xs text-gray-600 mt-1 font-medium'>{views} views</p>
        </div>
    </div>
  )
}

export default VideoCard