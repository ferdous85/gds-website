import React from 'react'
import './Footer.css'
import Logo from '../../assets/images/logo.png'

const Footer = () => {
    return (
        <>
            <footer className="footer">
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-2 col-sm-6">
                    <div className="footer__widget">
                        <h5>COMPANY</h5>
                        <ul>
                            <li><a href="/">About Us</a></li>
                            <li><a href="/">Company</a></li>
                            <li><a href="/">Press & Blog</a></li>
                            <li><a href="/">Privacy Policy</a></li>
                            <li><a href="/">Faq</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6">
                    <div className="footer__widget">
                        <h5>Courses</h5>
                        <ul>
                            <li><a href="/">Winter driving</a></li>
                            <li><a href="/">Program for seniors</a></li>
                            <li><a href="/">Adult in car lesons</a></li>
                            <li><a href="/">Defensive driving</a></li>
                            <li><a href="/">Stick shit lessons</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6">
                    <div className="footer__widget">
                        <h5>USEFUL LINKS</h5>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/">Drupal Themes</a></li>
                            <li><a href="/">WordPress Themes</a></li>
                            <li><a href="/">Support</a></li>
                            <li><a href="/">Services</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="footer__about">
                        <div className="footer__logo">
                            <a href="/"><img src={Logo} width='70px' alt=""/></a>
                        </div>
                        <p>Address : 15 Division Street, New York, NY 12032, 
                            United States of America</p>
                        <ul>
                            <li>Phone : +0 (123) 456789</li>
                            <li>Email : Kaseo@gmail.com</li>
                            <li>Fax : +8 (123) 456 789</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12 text-center">
                    
                    <div className="footer__copyright__text">
                        <p>Copyright &copy; {new Date().getFullYear()} All rights reserved  <i className="fa fa-heart" aria-hidden="true"></i> by <a href="https://tecnomint.com">Tecnomint</a></p>
                    </div>
                    
                </div>
            </div>
        </div>
    </footer>
        </>
    )
}

export default Footer
