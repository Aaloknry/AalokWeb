import React from 'react'
import './Navbar.css'


export default function Navbar(props) {
  return (
    <div>
    <link href="https://fonts.googleapis.com/css2?family=Ubuntu&display=swap" rel="stylesheet"></link>
    <nav className="navbar navbar-expand-lg ">
    <div className="container-fluid">
    <a className="navbar-brand" href="/">
      <img src="/logo.png" alt="Logo" width="60" height="60" class="d-inline-block align-text-top"/>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <ul className="nav-links">

        <li className="nav-link">
          <a href="/">Home</a></li>
        <li className="nav-link">
          <a href="/">Physics</a></li>
        <li className="nav-link">
          <a href="/">About</a></li>
        
        </ul>
      </div>
    </div>
    <form class="d-flex">
    <button to="/" class="btn btn-outline-success me-2" type="button">{props.b1}</button>
    <button class="btn btn-sm btn-outline-secondary" type="button">{props.b2}</button>
  </form>
  </div>
  </nav>
  </div>
  )
}












