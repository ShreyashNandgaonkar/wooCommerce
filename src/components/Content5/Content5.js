import React from 'react';
import './Content5.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faLifeRing, faLock} from '@fortawesome/free-solid-svg-icons';

function Content5() {
    return (
        <div className="Content5">
        <div className="content5">
        <div className="content5-main">
        <p className="content5-head">WooCommerce- the most customizable eCommerce platform for building your online business.</p>
        </div>
        <button className="content5-btn">get started</button>
        </div>
        <div className="main-grid">
        <div className="content5-grid">
        <div className="content5-grid-items"><FontAwesomeIcon className="content5-grid-icons" icon={faCheckCircle}/>30 day money back guarantee</div>
        <div className="content5-grid-items"><FontAwesomeIcon className="content5-grid-icons" icon={faLifeRing} /> Support teams across the world</div>
        <div className="content5-grid-items"><FontAwesomeIcon className="content5-grid-icons" icon={faLock} />Safe & Secure online payment</div>
        </div>
        </div>
        <div className="content5-logo">
        <img className="content5-logo-img" src={require('../../images/logo5.png')} alt=""/>
        </div>
        <hr className="horizontal-line" />
        <div className="footer">
        <div className="footer-grid">
        <div className="footer-items">WHO ARE WE
        <div className="footer-items-inner">
        <div className="footer-inner">About</div>
        <div className="footer-inner">Team</div>
        <div className="footer-inner">Work With Us</div>
        </div>
        </div>
        <div className="footer-items">WOOCOMMERCE
        <div className="footer-items-inner">
        <div className="footer-inner">Features</div>
        <div className="footer-inner">Payments</div>
        <div className="footer-inner">Marketing</div>
        <div className="footer-inner">Shipping</div>
        <div className="footer-inner">Extension Store</div>
        <div className="footer-inner">Ecommerce blog</div>
        <div className="footer-inner">Development blog</div>
        <div className="footer-inner">Ideas board</div>
        <div className="footer-inner">Community</div>
        <div className="footer-inner">Style Guide</div>
        <div className="footer-inner">Email Newsletter</div>
        </div>
        </div>
        <div className="footer-items">OTHER PRODUCTS
        <div className="footer-items-inner">
        <div className="footer-inner">Storedront</div>
        <div className="footer-inner">WooSlider</div>
        <div className="footer-inner">Sensei</div>
        <div className="footer-inner">Sensei Extensions</div>
        </div></div>
        <div className="footer-items">SUPPORT
        <div className="footer-items-inner">
        <div className="footer-inner">Documentaions</div>
        <div className="footer-inner">Customizations</div>
        <div className="footer-inner">Support Policy</div>
        <div className="footer-inner">Contact</div>
        <div className="footer-inner">Covid-19 Resources</div>
        <div className="footer-inner">Payment Notice for</div>
        <div className="footer-inner">California Users</div>
        </div>
        </div>
        <div className="footer-items">WE RECOMMEND
        <div className="footer-items-inner">
        <div className="footer-inner">WooExperts</div>
        <div className="footer-inner">Hosting Solutions</div>
        <div className="footer-inner">Pre-sales FAQ</div>
        <div className="footer-inner">Success Stories</div>
        <div className="footer-inner">Design Feedback Group</div>
        </div>
        </div>
        </div>
        </div>
        </div>
    )
}

export default Content5
