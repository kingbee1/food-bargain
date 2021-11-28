import React from 'react'
import logo from '../../images/logo.png';



const Footer =  () => {
    return (
        <div className="footer-main">
        <div className="footer flex justify-between">
            <div>
                <img src={logo} alt="footer" />
            </div>
            <div>
                <p className="footer-head">Company</p>
                <div className="footer-sub">
                    <p>About Us</p>
                    <p>Careers</p>
                    <p>Blog</p>
                    <p>Privacy</p>
                    <p>Terms & Conditions</p>
                </div>
            </div>
            <div>
                <p className="footer-head">Help</p>
                <div className="footer-sub">
                    <p>Help Center</p>
                    <p>FAQs</p>
                </div>
            </div>
            <div>
                <p className="footer-head">Contact</p>
                <div className="footer-sub">
                    <p>support@foodbargains.com</p>
                    <p>+234808877654</p>
                </div>
            </div>
        </div>
            <p className="copy">Copyright &copy; 2021 Food Bargains Group Limited (RC554432) </p>
        </div>
    )
}

export default Footer;