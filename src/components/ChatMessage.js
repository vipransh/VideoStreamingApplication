import React from 'react'
import userIocn from '../assets/userIcon.png'

function ChatMessage({name, message}) {
  return (
    <div className='flex items-center gap-2 px-2 py-1 overflow-x-hidden'>
      <img className='w-8' src={userIocn} alt='user-icon'/>
      <p className='text-sm'><span className='text-md font-medium '>{name}</span> {message}</p>
    </div>
  )
}

export default ChatMessage