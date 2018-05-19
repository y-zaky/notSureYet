import React, {Component} from 'react'

import popcornCloud from './images/popcorn-cloud.png'

export default class RepoListItem extends Component {
    constructor (props) {
        super(props)
        this.state = {
            isStarred: false
          }  
    }


  toggleStarredState () {
    this.setState({isStarred:!this.state.isStarred}) 
  }

    render () {
    return (
        <ul className={this.state.isStarred ? "repolist__item--starred" : "repolist__item"} key={this.props.data.id}>
            <li><strong>Name:</strong> <a href={this.props.data.html_url}>{this.props.data.name}</a></li>
            <li><strong>Description:</strong> {this.props.data.description ? this.props.data.description : 'Sorry, no description found.'}</li>
            <li><strong>Stars:</strong> {this.props.data.stargazers_count}</li>
            <img className="repolist__popcornImage" onClick={() => {this.props.starRepo(this.props.data); this.toggleStarredState()} } src={popcornCloud}/>
        </ul> 
    )


    }
}

