import React from 'react'
import ResponseListItem from './ResponseListItem'

const ResponseList = ({wishes}) => {
    return(
        <div>
            <h5>Wish List</h5>
            <ul>
                {wishes ? wishes.map(wish => {
                    return(
                        <ResponseListItem wish={wish} key={wish.id}/>
                    )
                }) : null}
            </ul>
        </div>
    )
}

export default ResponseList