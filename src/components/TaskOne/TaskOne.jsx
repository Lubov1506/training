import React from "react"
import friends from "../../assets/friendsList.json"
import FriendsList from "./FriendsList"
import Profile from "./Profile"
import userData from "../../assets/userdata.json"
import TransactionHistory from "./TransactionHistory"
import transactions from "../../assets/transactionsList.json"
export const TaskOne = () => {
  return (
    <div>
      <Profile userData={userData} />
      <FriendsList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  )
}

