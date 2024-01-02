import React from 'react'

function Home() {
  return (
    <>
        <main>
            <div class="hero-section">
                <div class="grid container two-column">
                    <div class="hero-content">
                        <h1 class="heading">Hey, I am SumitDevs <br/>Full Stack Mern Developer</h1>
                        <p>👋 Hello, I'm Sumitdevs, a passionate Full Stack MERN Developer dedicated to crafting robust and scalable web applications. 
                            With expertise in theMERN stack—MongoDB, Express.js, React.js, and Node.js</p>
                        <button type="button" class="btn">Download Resume</button>
                    </div>
                    <div class="hero-img">
                        <figure>
                            <img src="images/sumitdevs.jpg" alt="a mern stack developer"/>
                        </figure>
                    </div>
                </div>
            </div>
        </main>
        <div class="recent-post--container">
                <div class="container post-tag">
                    <span class="post-span-1">Recent posts</span>
                <a href="#">View all</a>
                </div>
                <div class="container grid two-column">
                <div class="post-div">
                    <a  href="#"><h2 class="subheading">Building Scalable Web Applications with MERN</h2></a>
                    <div class="post-date">
                        <span>12 Feb 2020</span>
                        <span class="date-line">|</span>
                        <span>Web, Mern</span>
                    </div>
                    <p>Building scalable web applications with the MERN (MongoDB, Express.js, React, Node.js) stack empowers developers to create robust,
                        high-performance solutions.</p>
                </div>
                <div class="post-div">
                    <a  href="#"><h2 class="subheading">Building Scalable Web Applications with MERN</h2></a>
                    <div class="post-date">
                        <span>12 Feb 2020</span>
                        <span class="date-line">|</span>
                        <span>Web, Mern</span>
                    </div>
                    <p>Building scalable web applications with the MERN (MongoDB, Express.js, React, Node.js) stack empowers developers to create robust,
                        high-performance solutions.</p>
                </div>
            </div>
        </div>
        <div class="feature-works--section">
            <p class="container featured-p">Featured works</p>
                <div class="feature-works--div">
                <div class="container grid two-column">
                    <div class="feature-img">
                        <figure>
                            <img src="images/coding-img-1.jpg" alt="a programmer writing code"/>
                        </figure>
                    </div>
                    <div class="feature-content">
                        <a href=""><h2 class="subheading">Social Media Dashboard</h2></a>
                        <span class="span-year">2023</span>
                        <span class="span-category">Dashboard</span>
                        <p>The Social Media Dashboard is a comprehensive web application
                            designed to streamline and enhance the user's social media experience. It serves as a centralized 
                            platform for managing multiple social media accounts,
                            providing real-time updates, and facilitating engagement with followers. </p>
                    </div>
                </div> 
                <hr class="container"/>
            </div>
            <div class="feature-works--div">
                <div class="container grid two-column">
                <div class="feature-img">
                    <figure>
                        <img src="images/coding-img-1.jpg" alt="a programmer writing code"/>
                    </figure>
                </div>
                <div class="feature-content">
                    <a href=""><h2 class="subheading">Social Media Dashboard</h2></a>
                    <span class="span-year">2023</span>
                    <span class="span-category">Dashboard</span>
                    <p>The Social Media Dashboard is a comprehensive web application
                            designed to streamline and enhance the user's social media experience. It serves as a centralized 
                            platform for managing multiple social media accounts,
                            providing real-time updates, and facilitating engagement with followers. </p>
                </div>
            </div> 
            <hr class="container"/>
        </div>
        <div class="feature-works--div">
            <div class="container grid two-column">
            <div class="feature-img">
                <figure>
                    <img src="images/coding-img-1.jpg" alt="a programmer writing code"/>
                </figure>
            </div>
            <div class="feature-content">
                <a href=""><h2 class="subheading">Social Media Dashboard</h2></a>
                <span class="span-year">2023</span>
                <span class="span-category">Dashboard</span>
                <p>The Social Media Dashboard is a comprehensive web application
                        designed to streamline and enhance the user's social media experience. It serves as a centralized 
                        platform for managing multiple social media accounts,
                        providing real-time updates, and facilitating engagement with followers. </p>
            </div>
        </div> 
        <hr class="container"/>
    </div>
        </div>
    </>
  )
}

export default Home