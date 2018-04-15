import React, {Component} from 'react'

import AnimatedPopcorn from './animatedPopcorn'

import boyPopcorn from './images/boyPopcorn.png'
import popcornCloud from './images/popcorn-cloud.png'

// let styles ={
//     height: "30px",
//     width: "30px",
//     "animation-name": "pop",
//     "animation-duration": "1000ms",
//     "animation-iteration-count": "infinite",
//     "transform-origin": `${this.state.x}px ${this.state.y}px`
// }

export default class Loading extends Component {
    constructor (props) {
        super (props)
    }

    render () {
        return (
            <div>
                <h1>Loading...</h1>
                <div className ="loading">
                    <img className='loading__boy' src={boyPopcorn} />
                    <AnimatedPopcorn /> 
                    <AnimatedPopcorn />     
                    <AnimatedPopcorn /> 
                    <AnimatedPopcorn />   
                    <AnimatedPopcorn />   
                    <AnimatedPopcorn />   
                    <AnimatedPopcorn />     
                </div>
            </div>
        )
    }
}



