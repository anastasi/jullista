import React, { Component } from 'react'
import { addFriend } from '../../store/actions/friendActions'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class AddFriend extends Component {
  state = {
    email: '',
    name: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addFriend(this.state)
  }
  render() {
    const { auth } = this.props
    if(!auth.uid) return <Redirect to="/signin" />
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Add your friend</h5>
          <div className="input-field">
            <label htmlFor="email">Add your friend's Email:</label>
            <input onChange={this.handleChange} type="text" id="email" />
          </div>
          <div className="input-field">
            <label htmlFor="name">Add your friend's name:</label>
            <input onChange={this.handleChange} type="text" id="name" />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Recieve a request</button>
          </div>
        </form>        
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return({
    auth: state.firebase.auth
  })
}

const mapDispatchToProps = (dispatch) => {
  return{
    addFriend: (friend)=>dispatch(addFriend(friend))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddFriend)
