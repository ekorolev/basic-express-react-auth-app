import React from 'react'
import { Link } from 'react-router-dom'

class MainComponentLayout extends React.Component {
  render() {
    return (
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>
        
        {this.props.children}
      </div>
    )
  }
}

export default MainComponentLayout