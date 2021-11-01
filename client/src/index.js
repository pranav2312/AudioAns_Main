import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import App from './App'
import Question from './components/Question'
import QuestionList from './components/QuestionList'
import NewQuestion from './components/NewQuestion'

const routing = (
  <Router>
    <Switch>

      <Route
        exact path='/'
        component={App}>
      </Route>
      <Route
        exact path='/questions/:id'
        component={Question}>
      </Route>
      <Route
        exact path='/questions'
        component={QuestionList}>
      </Route>
      <Route
        exact path='/new_question'
        component={NewQuestion}>
      </Route>

    </Switch>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));