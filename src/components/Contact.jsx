import React from 'react'

function Contact() {
  return (
    <>
         <div class="contact-section">
            <div class="contact-div container">
                <h2 class="heading">Contact Us</h2>
                <div class="grid two-column shadow-div">
                    <div class="text-content">
                        <div class="child-content"></div>
                        <h3 class="subheading">Lets get in touch</h3>
                        <p class="p-contact">We're open for any suggestion or just to have a chat</p>
                        <div class="contact-info">
                            <div class="grid two-column">
                                <div class="info-logo">
                                    <i class=" fa-solid  fa-location-dot"></i>
                                </div>
                                <div class="info-text">
                                    <p><span>Address: </span>198 West 21th Street, Suite 721 New York NY 10016</p>
                                    <p></p>
                                </div>
                            </div>
                        </div>
                        <div class="contact-info">
                            <div class="grid two-column">
                                <div class="info-logo">
                                    <i class=" fa-solid  fa-envelope"></i>
                                </div>
                                <div class="info-text">
                                    <p><span>Email: </span><a href="mailto:mysumitdevs@gmail.com">mysumitdevs@gmail.com</a></p>
                                    <p></p>
                                </div>
                            </div>
                        </div>
                        <div class="contact-info">
                            <div class="grid two-column">
                                <div class="info-logo">
                                    <i class=" fa-solid  fa-phone"></i>
                                </div>
                                <div class="info-text">
                                    <p><span>Phone: </span><a href="tel:+916202028102">6202028102</a></p>
                                    <p></p>
                                </div>
                            </div>
                        </div>
                        <div class="contact-info">
                            <div class="grid two-column">
                                <div class="info-logo">
                                    <i class=" fa-solid  fa-globe"></i>
                                </div>
                                <div class="info-text">
                                    <p><span>Website: </span><a href="DevsCode/index.html">DevsCode</a></p>
                                    <p></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="form-content">
                        <h3 class="subheading">Get in touch</h3>
                        <div class="grid two-column">
                            <div class="full-name">
                                <label for="name">full name</label>
                                <input type="text" id="name" placeholder="Name"/>
                            </div>
                            <div class="email">
                                <label for="email">email address</label>
                                <input type="email" id="email" placeholder="Email"/>
                            </div>
                        </div>
                        <label for="subject">subject</label>
                        <input type="text" id="subject" placeholder="Subject"/>
                        <label for="message">message</label>
                        <br/>
                        <textarea  id="message" placeholder="Message"></textarea>
                        <div class="contact-btn--div">
                            <button type="submit" class="btn">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
         </div>
    </>
  )
}

export default Contact