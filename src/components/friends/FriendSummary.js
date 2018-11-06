import React from 'react'
import { Link } from 'react-router-dom'

const FriendSummary = ({friend}) => {
  return(
    <div className="content">
      <Link to={"/friend/"+friend.id}>
        <div className="card z-depth-0 project-summary">
          <span className="card-title">{friend.name}</span>
          <p>{friend.status}</p>
          <p className="grey-text">{friend.email}</p>
          <p className="grey-text">20 December, 2018</p>
        </div>
      </Link>
    </div>
  )
}

export default FriendSummary