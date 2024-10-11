import React from 'react'

function Header() {
  return (
    <div className="container">
    <header className="d-flex flex-wrap justify-content-center py-3 mb-4 ">
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
      >
        
        <span className="fs-4 title mx-auto">Salita.co</span>
      </a>
      <ul className="nav nav-pills">
       
        <li className="nav-item">
          <a href="#about" className="nav-link link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">
            About
          </a>
        </li>
        <li className="nav-item">
          <a href="#background" className="nav-link link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">
           Background
          </a>
        </li>
        <li className="nav-item">
          <a href="#cards" className="nav-link link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">
            Cards
          </a>
        </li>
        <li className="nav-item">
          <a href="#testimonials" className="nav-link link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">
           Testimonials
          </a>
        </li>
      </ul>
    </header>
  </div>
  
  )
}

export default Header