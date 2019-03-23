import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route } from "react-router-dom"

import './styles'
import List from 'pages/employee/list';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Router>
          <div className="content">
            <Route exact path="/" component={ List } />
            <Route path="/new" component={ Form } />
            <Route path="/edit/:id" component={ Form } />
          </div>
        </Router>
      </div>
    )
  }
}

render(<App />, document.getElementById('main'))