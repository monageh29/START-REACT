import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
   
    <>
 <nav class="navbar navbar-expand-lg  bg-dark   w-100   fixed-top ">
  <div class="container ">
    <Link class="navbar-brand  " to="">START REACT</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse  " id="navbarSupportedContent">
      <ul class="navbar-nav  m-auto  ">
      <li class="nav-item  ">
          <Link class="nav-link fw-bold" to="">START REACT</Link>
        </li>
        <li class="nav-item  ">
          <Link class="nav-link fw-bold" to="PORTFOLIO">PORTFOLIO</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link fw-bold" to="ABOUT">ABOUT</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link fw-bold" to="CONTACT">CONTACT</Link>
        </li>
      
      </ul>
     
    </div>
  </div>
</nav>
    </>
  )
}
