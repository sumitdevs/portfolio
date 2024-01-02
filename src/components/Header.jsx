import React from 'react'

function Header() {
  return (
    <>
        <header class="navbar-section">
            <div class="container">
                <div class="logo">
                    <a href="index.html"><img src="images/DevsCode (1).png" alt="sumitdevs logo"/></a>
                </div>
                <div class="navbar">
                    <ul>
                        <li class="navitem"><a href="index.html">Home</a></li>
                        <li class="navitem"><a href="work.html">Work</a></li>
                        <li class="navitem"><a href="blog.html">Blog</a></li>
                        <li class="navitem"><a href="contact.html">Contact</a></li>
                    </ul>
                </div>
            </div>
        </header>
    </>
  )
}

export default Header