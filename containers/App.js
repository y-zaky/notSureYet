import React, {Component} from 'react'
import {connect} from 'react-redux'

// Components
import RepoList from '../components/repoList'
import FilterDropdown from '../components/filterDropdown'

// Actions
import {loadComplete as loadCompleteAction} from '../actions/loadComplete'
import {fetchError as fetchErrorAction} from '../actions/fetchError'
import {fetchSuccess as fetchSuccessAction} from '../actions/fetchSuccess'
import {filterRepos as filterReposAction} from '../actions/filterRepos'

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

  constructor(props){
    super(props)

    this.filterLanguage = this.filterLanguage.bind(this)
  }

  filterLanguage (language) {
    console.log('filter Language called with language:', language.value)
    console.log('props in App', this.props)
    //TO DO - THIS .PROPS BELOW IS UNDEFINED . ALSO UNCOMMENT OUT REDUCER CODE THAT FILTERS THE REPOS. 
    this.props.filterRepos(language)
  }
  
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
    console.log('props IN RENDER', this.props)
    const { error, isLoaded, repos } = this.props
    
    if (!isLoaded) return <h1>Loading....</h1>
    else if (error) return <h1>Sorry there has been an Error. Message: {error}</h1>
    else {
      return (
        <div>
          <h1>Whats Poppin?</h1>
          <FilterDropdown filterLanguage={this.filterLanguage}  data={repos} />
          <RepoList data={repos} />
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
  fetchSuccess: fetchSuccessAction,
  filterRepos: filterReposAction
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
