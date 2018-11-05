import React from 'react'

const GiftsList = (props) => {
  let id = props.match.params.id
  return(
    <div className="section container">
      <div className="card z-depth-0">
        <div className="card-content">
          <div className="card-title">{id} Lista</div>
          <ul>
            <li>gift1</li>
            <li>gift2</li>
            <li>gift3</li>
            <li>gift4</li>
            <li>gift5</li>
            <li>gift6</li>
            <li>gift7</li>
          </ul>
        </div>
      </div>
    </div>
  )
}


export default GiftsList
