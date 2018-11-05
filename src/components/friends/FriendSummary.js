import React from 'react'

const FriendSummary = ({friend}) => {
  return(
    <div className="content">
      <div className="card z-depth-0 project-summary">
        <span className="card-title">{friend.name}</span>
        <p>{friend.status}</p>
        <p className="grey-text">{friend.email}</p>
        <p className="grey-text">20 December, 2018</p>
      </div>
    </div>
  )
}

export default FriendSummary