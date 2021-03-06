import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
class SignUp extends Component {
  state = {
    first_name: '',
    email: '',
    password: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state)
  }
  render() {
    const { auth } = this.props
    if(auth.uid) return <Redirect to="/" />
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Sign Up</h5>
          <div className="input-field">
            <label htmlFor="first_name">First Name:</label>
            <input onChange={this.handleChange} type="text" id="first_name" />
          </div>
          <div className="input-field">
            <label htmlFor="email">Email:</label>
            <input onChange={this.handleChange} type="text" id="email" />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password:</label>
            <input onChange={this.handleChange} type="text" id="password" />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
          </div>
        </form>        
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(SignUp)
