import React,{useEffect,useState} from 'react'
import { Youtube_Comment_Api } from '../config/apiConfig'
import CommentReplies from './CommentReplies'
import downArrowIcon from '../assets/down-arrow-icon.png'

function TopComments({videoId}) {
    const [comments,setComments]=useState([])
    const [replyFlag, setReplyFlag]=useState(false)


    const replyVisibility=()=>{
        if(replyFlag)
        setReplyFlag(false)
        else
        setReplyFlag(true)
    }


    useEffect(()=>{
      async function fetchComments(){
            const data=await fetch(Youtube_Comment_Api+videoId)
            const json=await data.json()
            setComments(json.items);
            console.log(json.items);
        }
        fetchComments();
    },[videoId])
  return (
    <div className='mt-6 pl-10 '>
        <div><h1 className='mb-6 text-xl'>{comments && comments.length} comments</h1></div>
        {
            comments && comments.map((data,index)=>(
                <div key={index} className='flex flex-col  gap-3 mb-3'>
                    <div className='flex flex-row items-center gap-3   p-1'>
                    <div>
                    <img className='w-10 h-10 rounded-full' src={data.snippet?.topLevelComment.snippet?.authorProfileImageUrl} alt='profile-img'/>
                    </div>
                    <div>
                        <h3 className='font-medium'>{data.snippet?.topLevelComment.snippet?.authorDisplayName}</h3>
                        <p>{data.snippet?.topLevelComment.snippet?.textDisplay}</p>
                    </div>
                    </div>
                     {
                        data.replies && <div>
                        <div className='flex items-center gap-3 ml-12'>
                        <img className='cursor-pointer w-6' onClick={replyVisibility} src={downArrowIcon} alt="arrow-icon"/>
                        <p className='text-sm font-semibold'>{data.replies?.comments.length} reply</p>
                        </div>
                        {(data.snippet?.totalReplyCount && replyFlag)>=1? <CommentReplies comments={data.replies?.comments}/>: ""}
                    </div>
                     }
                </div>
                
            ))
        }
    </div>
  )
}

export default TopComments