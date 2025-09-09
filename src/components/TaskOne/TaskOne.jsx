import React from 'react';
import friends from '../../assets/friendsList.json'
import FriendsList from './FriendsList';
import Profile from './Profile';
import userData from '../../assets/userdata.json'
const TaskOne = () => {
    return (
        <div>
            <Profile userData={userData}/>
             <FriendsList friends={friends} />
        </div>
    );
}

export default TaskOne;
