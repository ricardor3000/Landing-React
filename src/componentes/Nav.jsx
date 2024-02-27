import React from 'react'

export let Navegacion = () => {
  return <nav className="navbar navbar-expand-lg bg-dark">
  <div className="container d-flex justify-content-between">
    <div>
      <a className="navbar-brand text-light" href="#">Navbar</a>
    </div>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active text-light" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="#">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="#">Pricing</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" aria-disabled="true">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>; 
}

