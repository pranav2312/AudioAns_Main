import React from 'react'
import { Link } from 'react-router-dom'
import './components/main.css'

function App() {
  return (
    <div className='homepage'>
      <div className="home-content">
        <h1>Welcome to My Q/A portal</h1>
        <div>
          <Link to="/questions">
            <p>
              Questions
              <i className="fa fa-chevron-right"></i>
            </p> 
          </Link>
        </div>
      </div>
    </div>
  )
}

export default App
