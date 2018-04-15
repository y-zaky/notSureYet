import React, {Component} from 'react'

import popcornCloud from './images/popcorn-cloud.png'

export default class AnimatedPopcorn extends Component {
    constructor (props) {
        super (props)
        this.state = {
            x: 0,
            y: 0,
            animateTime: 0
        }
    }

    componentDidMount() {
        setInterval(() => {
          this.setState({
            x: Math.floor(Math.random()*10),
            y: Math.floor(Math.random()*400),
            animateTime: Math.floor(Math.random()*10000)
          })
        }, 100)
      }

    render () {
        return (
                <img className='loading__popcornTub' 
                    src={popcornCloud} 
                    style= { {
                        height: "30px",
                        width: "30px",
                        "z-index": "-1",
                        "position": "absolute",
                        "left": "0px",
                        "right": "0px",
                        "top": "0px",
                        "bottom": "0px",
                        "margin": "auto",
                        "animation-name": "pop",
                        "animation-duration": `${this.state.animateTime}ms`,
                        "animation-iteration-count": "infinite",
                        "transform-origin": `${this.state.x}px ${this.state.y}px`             
                    } }
                />           
        )
    }
}