import React, {Component} from 'react'

import AnimatedPopcorn from './animatedPopcorn'

import boyPopcorn from './images/boyPopcorn.png'
import popcornCloud from './images/popcorn-cloud.png'

export default class Loading extends Component {
    constructor (props) {
        super (props)
    }

    render () {
        return (
            <div className="loading__container--outer">
                <h1 className="loading__title">Whats Poppin' on Github?</h1>
                <div className ="loading__container--inner">
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



