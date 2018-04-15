import React, {Component} from 'react'

import popcornTub from './images/popcornTub.png'

export default function popBasket (props) {
    return (
        <div className="basket__container">
            <img className="basket__popcornImage" src={popcornTub} />
            <p className="basket__counter">{props.starredRepos.length}</p>
        </div>
    )
}