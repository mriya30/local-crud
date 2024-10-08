import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light ">
  <div className="container-fluid">
    <a className="navbar-brand text-light" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active text-white" to="/Home">Home</NavLink>
        </li>
        <li className="nav-item ps-3">
          <NavLink className="nav-link text-white" to="/Test">Link</NavLink>
        </li>
        <li className="nav-item ps-3">
          <NavLink className="nav-link text-white" to="/Registration">Create</NavLink>
        </li>
        <li className="nav-item ps-3">
          <NavLink className="nav-link text-white" to="/View">View</NavLink>
        </li>
        </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Header
