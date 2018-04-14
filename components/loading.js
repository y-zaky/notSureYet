import React, {Component} from 'react'

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
            animateTime: Math.floor(Math.random()*5000)
          })
        }, 100)
      }

    render () {
        return (
            <div className ="loading">
                <h1>Loading...</h1>
                <img className='loading__boy' src={boyPopcorn} />

                <img className='loading__popcornTub' 
                    src={popcornCloud} 
                    style= { {
                        height: "30px",
                        width: "30px",
                        "animation-name": "pop",
                        "animation-duration": `${this.state.animateTime}ms`,
                        "animation-iteration-count": "infinite",
                        "transform-origin": `${this.state.x}px ${this.state.y}px`             
                    } }
                />           
            </div>
        )
    }
}



