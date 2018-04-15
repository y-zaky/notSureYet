import React, {Component} from 'react'
import {connect} from 'react-redux'
//styles
import '../components/styles/styles.css'

// Components
import RepoList from '../components/repoList'
import FilterDropdown from '../components/filterDropdown'
import Loading from '../components/loading'

// Actions
import {loadComplete as loadCompleteAction} from '../actions/loadComplete'
import {fetchError as fetchErrorAction} from '../actions/fetchError'
import {fetchSuccess as fetchSuccessAction} from '../actions/fetchSuccess'
import {filterRepos as filterReposAction} from '../actions/filterRepos'
import {starRepo as starRepoAction} from '../actions/starRepo'

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
    this.starRepo = this.starRepo.bind(this)
  }

  filterLanguage (language) {
    console.log('filter Language called with language:', language.value)
    //TO DO - Create saving via local storage/ or via api ?
    // Think about cool loading start page? 
    this.props.filterRepos(language.value)
  }

  starRepo (repo) {
    console.log('starRepo Clicked')
    
  }
  
  componentDidMount () {
    const getData = () => {
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
      //1.1 seconds for users to see loading.
      setTimeout( getData, 1100)
  }

 

  render () {    
    console.log('props IN RENDER', this.props)
    const { error, isLoaded, repos, renderedRepos } = this.props
    if (!isLoaded) return <Loading />
    else if (error) return <h1>Sorry there has been an Error. Message: {error}</h1>
    else {
      return (
        <div>
          <h1>Whats Poppin?</h1>
          <FilterDropdown filterLanguage={this.filterLanguage}  data={repos} />
          <RepoList starRepo={this.starRepo} data={renderedRepos} />
        </div>
      )
    }
  }
}

// return <Loading />

const mapStateToProps = (state) => ({
  isLoaded: state.repos.isLoaded,
  error: state.repos.error,
  repos: state.repos.repos,
  renderedRepos: state.repos.renderedRepos
})

const mapDispatchToProps = {
  loadComplete: loadCompleteAction,
  fetchError: fetchErrorAction,
  fetchSuccess: fetchSuccessAction,
  filterRepos: filterReposAction,
  starRepo: starRepoAction
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
