import React, {Component} from 'react'

export default class RepoList extends Component {
  render () {
    const repoList = this.props.data.map(
      (repo) => (
        <ul key={repo.id}>
          <li><strong>Name:</strong> <a href={repo.html_url}>{repo.name}</a></li>
          <li><strong>Description:</strong> {repo.description ? repo.description : 'Sorry, no description found.'}</li>
          <li><strong>Stars:</strong> {repo.stargazers_count}</li>
        </ul>
      )
    )
    return repoList
  }
}
