import React from 'react'
import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import './components/main.css'
import Login from './pages/login'
import SignUp from './pages/signup'
import Question from './components/Question'
import QuestionList from './components/QuestionList'
import NewQuestion from './components/NewQuestion'
import { DataProvider } from './GlobalState'
import './style.css'
function App() {

  return (
    <DataProvider>
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
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
        </div>
      </Router>
    </DataProvider>

  )
}

export default App
const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
        <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="navbar-brand" to={"/sign-in"}>QnA portal</Link>
         
            </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
              </li>
            </ul>
          
        </div>
      </nav>
    </div>
  )
}
