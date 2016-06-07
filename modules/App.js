import React from 'react';
import { Link } from 'react-router';
import { NavLink } from './NavLink'
import { Home } from './Home'
import { IndexLink } from 'react-router'

export class App extends React.Component {
  render() {
    return (
      <div>
        <h1>React Router</h1>
        <ul role='nav'>
          <li><NavLink to='/about'>About</NavLink></li>
          <li><NavLink to='/repos'>Repos</NavLink></li>
          <li><IndexLink to='/' activeClassName='active'>Home</IndexLink></li>
        </ul>

        { this.props.children }
      </div>
    )
  }
}
