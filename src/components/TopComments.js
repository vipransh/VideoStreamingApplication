import React,{useEffect,useState} from 'react'
import { Youtube_Comment_Api } from '../config/apiConfig'
import CommentReplies from './CommentReplies'


function TopComments({videoId}) {
    const [comments,setComments]=useState([])
  


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
    <div className='mt-6 pl-2 md:pl-10 '>
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
                        <p>{data.snippet?.topLevelComment.snippet?.textOriginal}</p>
                    </div>
                    </div>
                     {
                        data.replies && data.replies?.comments.length!==0 &&  <div>
                        {
                            data.replies?.comments.map((cmt, index)=>(
                                <CommentReplies data={cmt} key={index+"un"}/>
                            ))
                        } 
                        
                    </div>
                     }
                </div>
                
            ))
        }
    </div>
  )
}

export default TopComments