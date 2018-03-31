import React, {Component} from 'react'

import {connect} from 'react-redux'

import {loadComplete as loadCompleteAction} from '../actions/loadComplete'
import {fetchError as fetchErrorAction} from '../actions/fetchError'
import {fetchSuccess as fetchSuccessAction} from '../actions/fetchSuccess'

var date = dateLastWeek()
var url = 'https://api.github.com/search/repositories?q=created:%3E' + date + '&sort=stars&order=desc'

// set date minus 7 days, because we want passed weeks repos only
// return as YYYY-MM-DD
function dateLastWeek () {
  var date = new Date()
  date.setDate(date.getDate() - 7)
  return date.toISOString().substring(0, 10)
}

class App extends Component {

  componentDidMount () {
    fetch(url)
      .then(res => res.json())
      .then(
        data => {
          this.props.loadComplete(true)
          this.props.fetchSuccess(data)
        },
        error => {
          this.props.fetchError(error)
        }
      )
  }
  render () {
    console.log('props', this.props)
    // const { error, isLoaded, repos } = this.state
    // console.log(repos.items)

    // const repoList = repos.items.map(
    //   (repo) => (
    //     <ul key={repo.id}>
    //       <li><strong>Name:</strong> <a href={repo.html_url}>{repo.name}</a></li>
    //       <li><strong>Description:</strong> {repo.description ? repo.description : 'Sorry, no description found.'}</li>
    //       <li><strong>Stars:</strong> {repo.stargazers_count}</li>
    //     </ul>
    //   )
    // )

    if (!this.props.isLoaded) return <h1>Loading....</h1>
    else if (this.props.error) return <h1>Sorry there has been an Error. Message: {this.props.error}</h1>
    else {
      return (
        <div>
          <h1>First React Data App</h1>
          {/* {repoList} */}
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => ({
  isLoaded: state.repos.isLoaded,
  error: state.repos.error,
  repos: state.repos.repos
})

const mapDispatchToProps = {
  loadComplete: loadCompleteAction,
  fetchError: fetchErrorAction,
  fetchSuccess: fetchSuccessAction
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
