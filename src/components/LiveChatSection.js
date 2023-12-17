import React,{useEffect,useState} from 'react'
import ChatMessage from './ChatMessage'
import messageIocn from '../assets/sendMessageIcon.png'
import { useDispatch, useSelector } from 'react-redux'
import { generateMessage, generateName } from '../config/helper';
import { addMessage } from '../utils/chatSlice';

function LiveChatSection() {
    const liveMessages=useSelector(state=>state.chat.messages)
    const dispatch=useDispatch();
    const [message, setMessage]=useState("")

    useEffect(()=>{
        const t=setInterval(()=>{
            dispatch(addMessage({
                name: generateName(),
                message: generateMessage(),
            }))
        },400)

        return ()=>{
            clearInterval(t);
        }
    },[dispatch])

    const sendLiveMessage=()=>{
        if(message){
            dispatch(addMessage({
                name: "Vipransh",
                message: message
            }))
            setMessage("")
        }
    }



  return (
    <div className='w-[360px] hidden md:flex flex-col h-auto border border-gray-300 bg-gray-100  rounded-lg '>
        <div className='border-b border-gray-300 py-2 px-4'><h3>Live Chat</h3></div>
        <div className='h-[300px]  py-1 overflow-y-scroll  flex-col-reverse'>
           {
            liveMessages && liveMessages.map((data,index)=>(
               <ChatMessage key={index} name={data.name} message={data.message}/>
            ))
           }
        </div>
        <div className='flex items-center gap-3 pt-2 px-4  border-t border-gray-300 '>
            <input  onChange={(e)=>setMessage(e.target.value)} value={message} className='w-full border border-black py-1 rounded-md px-2' type='text' placeholder='write message..'/>
            <button onClick={()=>sendLiveMessage()}>
                <img src={messageIocn} alt='message-icon'/>
            </button>
        </div>
    </div>
  )
}

export default LiveChatSection

