import React, { Component } from 'react'
import ResponseList from './ResponseList'
import ResponseForm from './ResponseForm'

class Response extends Component {
    state = {
        wishes: [
            {id:1, text:'klänning'}, {id:2, text:'väska'}
        ]
    }

    addWish = (wish) => {
        wish.id = Math.random()
        let newWish =  [...this.state.wishes, wish]
        this.setState({
            wishes: newWish
        })
    }

    render() {
        const { wishes } = this.state
        return(
            <div className="container">
                <ResponseForm addWish={this.addWish}/>
                <ResponseList wishes={wishes}/>
            </div>
        )
    }
}
  
export default Response