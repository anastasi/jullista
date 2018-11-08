import React, { Component } from 'react'

class ResponseForm extends Component {
    state = {
        text: ''
    }

    handleOnChange = (e) => {
        this.setState({
            text: e.target.value
        })
    }

    handleOnSubmit = (e) => {
        e.preventDefault()
       this.props.addWish(this.state)
            
    }

    render() {
        return(
            <div>
                <form className="white" onSubmit={this.handleOnSubmit}>
                <h5 className="grey-text text-darken-3">Add your wishes</h5>
                <div className="input-field">
                    <label htmlFor="wish">Wish</label>
                    <input type="text" onChange={this.handleOnChange}/>
                </div>
                <div className="input-field">
                    <button className="btn pink lighten-1 z-depth-0">Add</button>
                </div>
                </form>
            </div>
        )
    }
}
  
export default ResponseForm