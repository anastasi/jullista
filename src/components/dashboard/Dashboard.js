import React, { Component } from 'react';
import FriendList from '../friends/FriendList'
import { connect } from 'react-redux'

class Dashboard extends Component {
  render() {
    const { friends } = this.props
    return(
      <div className="container">
        <div className="row">
          <FriendList friends={friends}/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (store) => {
  return({
    friends: store.friend.friends
  })
}

export default connect(mapStateToProps)(Dashboard)