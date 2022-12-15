import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
<ul>
    <li>
      {/* <a href='/home'>Home</a> */}
      {/* <Link to='/home'>Home</Link> */}
      <NavLink to="/home">Home</NavLink>
    </li>
    <li>
      {/* <a href='/profile'>Profile</a> */}
      {/* <Link to='/profile'>Profile</Link> */}
      <NavLink to='/profile'>Profile</NavLink>
    </li>
    <li>
      {/* <a href='/login'>Login</a> */}
      {/* <Link to='/login'>Login</Link> */}
      <NavLink to='/login'>Login</NavLink>
    </li>
</ul>
  )
}

export default Header