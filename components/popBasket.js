import React, {Component} from 'react'

//images
import popcornTub from './images/popcornTub.png'

//components
import BasketPreview from './basketPreview'



export default class PopBasket extends Component {

    constructor (props) {
        super(props);
        this.state = {
            isHovering: false
        }
        this.handleMouseHover = this.handleMouseHover.bind(this)
    }

    handleMouseHover () {
        console.log(this.toggleHoverState)
        this.setState(this.toggleHoverState)
    }

    toggleHoverState (state) {
        console.log('hi')
        return {
            isHovering: !state.isHovering
        }
    }

    render () {
        return (
            <div className="basket__container"
             onMouseEnter={this.handleMouseHover}
             onMouseLeave={this.handleMouseHover}
            >
                <img className="basket__popcornImage" src={popcornTub} />
                <p className="basket__counter">{this.props.starredRepos.length}</p>
                {this.state.isHovering && this.props.starredRepos.length > 0 && 
                    <div className="basketPreview__repoContianer">
                        <BasketPreview starredRepos={this.props.starredRepos}/>
                    </div>
                }
            </div>
        )
    }

    }
    