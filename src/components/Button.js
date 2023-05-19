import React from 'react'

function Button({name,index}) {
  return (
    <button key={index} className='bg-gray-200 px-2 py-1 rounded-md text-[0.9rem]'>{name}</button>
  )
}

export default Button