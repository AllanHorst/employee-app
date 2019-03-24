import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route } from "react-router-dom"

import './styles'
import List from 'pages/employee/list'
import New from 'pages/employee/new'
import Edit from 'pages/employee/edit'

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Router>
          <div className="content">
            <Route exact path="/" component={ List } />
            <Route path="/new" component={ New } />
            <Route path="/edit/:id" component={ Edit } />
          </div>
        </Router>
      </div>
    )
  }
}

render(<App />, document.getElementById('main'))