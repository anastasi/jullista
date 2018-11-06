import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'

const GiftsList = (props) => {
  const {friend} = props
  if(friend) {
    return (
      <div className="section container">
        <div className="card z-depth-0">
          <div className="card-content">
            <div className="card-title">{friend.name} Lista</div>
            <ul>
              <li>gift1</li>
              <li>gift2</li>
              <li>gift3</li>
              <li>gift4</li>
              <li>gift5</li>
              <li>gift6</li>
              <li>gift7</li>
            </ul>
            <span>{friend.email}</span>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <p>
        Not yet
      </p>
    )
  }
  
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id
  const friends = state.firestore.data.friends
  const friend = friends ? friends[id] : null
  return {
    friend: friend
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {collection: 'friends'}
  ])
)(GiftsList)
