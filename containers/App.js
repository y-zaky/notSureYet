import React, {Component} from 'react'
import {connect} from 'react-redux'
//styles
import '../components/styles/styles.css'

// Components
import RepoList from '../components/repoList'
import FilterDropdown from '../components/filterDropdown'
import Loading from '../components/loading'
import PopBasket from '../components/popBasket'

// Actions
import {loadComplete as loadCompleteAction} from '../actions/loadComplete'
import {fetchError as fetchErrorAction} from '../actions/fetchError'
import {fetchSuccess as fetchSuccessAction} from '../actions/fetchSuccess'
import {filterRepos as filterReposAction} from '../actions/filterRepos'
import {starRepo as starRepoAction} from '../actions/starRepo'
import {unStarRepo as unStarRepoAction} from '../actions/unStarRepo'

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
    this.unStarRepo = this.unStarRepo.bind(this)
  }

  filterLanguage (language) {
    console.log('filter Language called with language:', language.value)
    //TO DO - Create saving via local storage/ or via api ?
    // CSS for basket previews, and when you click it a new page opens. 
    // add animation everytime someone stars repo.
    //allow people to tick repo to add, and click again to remove
    this.props.filterRepos(language.value)
  }

  starRepo (repo) {
    this.props.starRepo(repo)
  }

  unStarRepo (repo) {
    this.props.unStarRepo(repo)
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
    const { error, isLoaded, repos, renderedRepos } = this.props
    if (!isLoaded) return <Loading />
    else if (error) return <h1>Sorry there has been an Error. Message: {error}</h1>
    else {
      return (
        <div>
          <div className="nav__container">
            <h1>Whats Poppin?</h1>
            <PopBasket starredRepos={this.props.starredRepos}/>
          </div>
          <FilterDropdown filterLanguage={this.filterLanguage}  data={repos} />
          <RepoList unStarRepo={this.unStarRepo} starRepo={this.starRepo} data={renderedRepos} />
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
  renderedRepos: state.repos.renderedRepos,
  starredRepos: state.repos.starredRepos
})

const mapDispatchToProps = {
  loadComplete: loadCompleteAction,
  fetchError: fetchErrorAction,
  fetchSuccess: fetchSuccessAction,
  filterRepos: filterReposAction,
  starRepo: starRepoAction,
  unStarRepo: unStarRepoAction
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
