import React from 'react'
import NavLink from './NavLink'

export default React.createClass({

  render() {
    return (
      <div>
        <h2>React Motion</h2>
        <ul style={{listStyle:'none'}}>
          <li><NavLink to="/motion/motion">Motion</NavLink></li>
          <li><NavLink to="/motion/staggered">Staggered</NavLink></li>
          <li><NavLink to="/motion/transition">Transition</NavLink></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})
