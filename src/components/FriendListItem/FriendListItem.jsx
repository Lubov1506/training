import React from "react"

const FriendListItem = ({ friendInfo }) => {
  const { avatar, name, isOnline } = friendInfo
  return (
    <div className='border-2 rounded-m flex flex-col items-center p-2'>
      <img src={`${avatar}`} alt='Avatar' width='48' />
      <p>{name}</p>
      <p className={`${isOnline ? "text-green-500" : "text-red-500"}`}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  )
}

export default FriendListItem
