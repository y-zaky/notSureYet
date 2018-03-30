import React, {Component} from 'react'

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
  constructor (props) {
    super(props)
    this.state = {
      error: null,
      isLoaded: false,
      repos: {items: []}
    }
  }

  componentDidMount () {
    console.log(url)
    fetch(url)
      .then(res => res.json())
      .then(
        data => {
          this.setState({
            isLoaded: true,
            repos: data
          })
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          })
        }
      )
  }
  render () {
    const { error, isLoaded, repos } = this.state
    console.log(repos.items)

    const repoList = repos.items.map(
      (repo) => (
        <ul key={repo.id}>
          <li><strong>Name:</strong> <a href={repo.html_url}>{repo.name}</a></li>
          <li><strong>Description:</strong> {repo.description}</li>
          <li><strong>Stars:</strong> {repo.stargazers_count}</li>
        </ul>
      )
    )

    if (!isLoaded) return <h1>Loading....</h1>
    else if (error) return <h1>Sorry there has been an Error. Message: {error.message}</h1>
    else {
      return (
        <div>
          <h1>First React Data App</h1>
          {repoList}
        </div>
      )
    }
  }
}

export default App
