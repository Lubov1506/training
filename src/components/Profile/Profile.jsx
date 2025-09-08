import React from "react"
import StatusItem from "../StatusItem/StatusItem"
import StatusBlock from "../StatusBlock/StatusBlock"

const Profile = (props) => {
  const { name, tag, location, image, stats } = props

  return (
    <div className='w-[300px] border-2 rounded-md mb-4 '>
      <div className='flex flex-col items-center p-2'>
        <img
          src={image}
          alt={`${name} avatar`}
          className='h-[100px] rounded-full bg-black'
        />
        <p>{name}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>

      <StatusBlock stats={stats} />
    </div>
  )
}

export default Profile
