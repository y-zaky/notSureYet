import React, {Component} from 'react'

import popcornCloud from './images/popcorn-cloud.png'

export default class RepoList extends Component {
  render () {
    console.log('repo list data', this.props.data)
    const repoList = this.props.data.map(
      (repo) => (
        <ul key={repo.id}>
          <li><strong>Name:</strong> <a href={repo.html_url}>{repo.name}</a></li>
          <li><strong>Description:</strong> {repo.description ? repo.description : 'Sorry, no description found.'}</li>
          <li><strong>Stars:</strong> {repo.stargazers_count}</li>
          <img onClick={() => this.props.starRepo(repo)} src={popcornCloud}/>
        </ul>
      )
    )
    return repoList
  }
}
