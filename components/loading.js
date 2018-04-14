import React, {Component} from 'react'

import boyPopcorn from './images/boyPopcorn.png'

function Loading (props) {
    return (
        <div className ="loading">
            <h1>Loading...</h1>
            <img class='loading-boy' src={boyPopcorn} />
        </div>
    )
}

export default Loading