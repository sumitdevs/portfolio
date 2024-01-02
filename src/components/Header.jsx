import React from 'react'
import { NavLink, Link } from 'react-router-dom'
function Header() {
  return (
    <>
        <header class="navbar-section">
            <div class="container">
                <div class="logo">
                    <Link to="/">
                        <img src="images/DevsCode (1).png" alt="sumitdevs logo"/>
                    </Link>
                </div>
                <div class="navbar">
                    <ul>
                        <li class="navitem"><NavLink to="/">Home</NavLink></li>
                        <li class="navitem"><NavLink to="work">Work</NavLink></li>
                        <li class="navitem"><NavLink to="blog">Blog</NavLink></li>
                        <li class="navitem"><NavLink to="contact">Contact</NavLink></li>
                    </ul>
                </div>
            </div>
        </header>
    </>
  )
}

export default Header