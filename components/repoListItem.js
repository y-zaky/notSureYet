import React, {Component} from 'react'

import popcornCloud from './images/popcorn-cloud.png'

export default class RepoListItem extends Component {
    constructor (props) {
        super(props)
        this.state = {
            isStarred: false,
          }  
    }


  toggleStarredState () {
    this.setState({isStarred:!this.state.isStarred}) 
  }

    render () {
        console.log('PROPZ', this.props)
        const starButton = this.state.isStarred ? 
            <img 
                className="repolist__popcornImage--starred" 
                onClick={() => {this.props.unStarRepo(this.props.data) ; this.toggleStarredState() }} 
                src={popcornCloud}
            />
        : 
            <img 
                className="repolist__popcornImage" 
                onClick={() => {this.props.starRepo(this.props.data); this.toggleStarredState() }}
                src={popcornCloud}
            />


    return (
        <ul 
        className={this.state.isStarred ? "repolist__item--starred" : "repolist__item"} key={this.props.data.id}
        onClick={this.state.isStarred? () => {this.props.unStarRepo(this.props.data) ; this.toggleStarredState() } : () => {this.props.starRepo(this.props.data); this.toggleStarredState() } }
        >
            <li><span className="repolist__item--title">NAME:</span> <a href={this.props.data.html_url}>{this.props.data.name}</a></li>
            <li><span className="repolist__item--title">DESCRIPTION:</span> {this.props.data.description ? this.props.data.description : 'Sorry, no description found.'}</li>
            <li><span className="repolist__item--title">STARS:</span> {this.props.data.stargazers_count}</li>
            {starButton}    
        </ul> 
    )


    }
}

