import React from 'react'
import FriendSummary from './FriendSummary'

const FriendList = ({ friends }) => {
  return(
    <div className="section">
      {friends && friends.map(friend => {
        return(
          <FriendSummary friend={friend} key={friend.id}/>
        )
      })}
    </div>
  )
}

export default FriendList 