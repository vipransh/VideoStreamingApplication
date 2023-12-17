import React, { useState } from 'react'
import downArrowIcon from '../assets/down-arrow-icon.png'

function CommentReplies({data}) {
    const [replyFlag, setReplyFlag]=useState(false);

    const replyVisibility=()=>{
        if(replyFlag)
        setReplyFlag(false)
        else
        setReplyFlag(true)
    }
  return (
    <div>
      <div className='flex items-center gap-3 ml-12'> 
                        <img className='cursor-pointer w-6' onClick={replyVisibility} src={downArrowIcon} alt="arrow-icon"/>
                        <p className='text-sm font-semibold'>{data?.replies?.comments.length} reply</p>
      </div>
                {replyFlag && <div  className=' py-1 flex flex-row items-center gap-3 mb-3 pl-10'>
                    <div>
                    <img className='w-10 h-10 rounded-full' src={data?.snippet?.authorProfileImageUrl} alt='profile-img'/>
                    </div>
                    <div>
                        <h3 className='font-medium '>{data?.snippet?.authorDisplayName}</h3>
                        <p>{data?.snippet?.textOriginal}</p>
                    </div>
                </div>}
    </div>
  )
}

export default CommentReplies