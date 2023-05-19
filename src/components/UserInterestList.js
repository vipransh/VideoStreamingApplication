import React from 'react'
import Button from './Button'


const list = ["All", "Live", "Gaming", "Music", "Cricket", "Comedy", "Cooking", "News", "Tourism","JavaScript", "Stocks", "Mixes", "Kapil_Sharma", "React", "Algorithms" , "Gadgets", "Indian_cuisine", "Computer_Science"]

function UserInterestList() {
  return (
    <div className='flex gap-3 overflow-x-auto no-scrollbar'>
      {
        list.map((name,index)=>(
          <Button key={index} name={name} index={index}/>
        ))
      }
    </div>
  )
}

export default UserInterestList