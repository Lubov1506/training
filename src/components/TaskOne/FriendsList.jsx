import React from "react"
import FriendListItem from "./FriendListItem"

const FriendsList = ({ friends }) => {

  return (
    <ul className="flex gap-2">
      {friends?.map((friend) => {
        return (
          <li key={friend.id}>
            <FriendListItem friendInfo={friend} />
          </li>
        )
      })}
    </ul>
  )
}

export default FriendsList
