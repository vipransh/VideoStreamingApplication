import React from 'react'

function CommentReplies({comments}) {
  return (
    <div>
        {
            comments && comments.map((data,index)=>(
                <div key={index+"xl"} className=' py-1 flex flex-row items-center gap-3 mb-3 pl-10'>
                    <div>
                    <img className='w-10 h-10 rounded-full' src={data.snippet?.authorProfileImageUrl} alt='profile-img'/>
                    </div>
                    <div>
                        <h3 className='font-medium '>{data.snippet?.authorDisplayName}</h3>
                        <p>{data.snippet?.textDisplay}</p>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default CommentReplies