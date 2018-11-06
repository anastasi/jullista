import React, { Component } from 'react';
import FriendList from '../friends/FriendList'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import { Redirect } from 'react-router-dom'

class Dashboard extends Component {
  render() {
    const { friends, auth } = this.props

    if(!auth.uid) return <Redirect to="/signin" />

    return(
      <div className="container">
        <div className="row">
          <FriendList friends={friends}/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return({
    friends: state.firestore.ordered.friends,
    auth: state.firebase.auth
  })
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'friends'}
  ])
)(Dashboard)