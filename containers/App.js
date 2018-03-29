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
      data: []
    }
  }

  render () {
    return (
      <h1>First React Data App</h1>
    )
  }
}

export default App
