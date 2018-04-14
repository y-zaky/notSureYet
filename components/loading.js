import React, {Component} from 'react'

import boyPopcorn from './images/boypopcorn.png'

function Loading (props) {
    return (
        <div className ="loading">
            <h1>Loading...</h1>
            <img src={boyPopcorn} />
        </div>
    )
}

export default Loading