import { faApple, faCcPaypal, faFacebook, faFirstOrder, faGoogle, faSnapchatSquare} from '@fortawesome/free-brands-svg-icons';
import {  faToggleOn, faHome} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Content2.css';

function Content2() {
    return (
        <div className="second-content">
        <div className="content2">
        <div className="content2-main">
        <p className="content2-head">Your eCommerce made simple</p>
        </div>
        </div>
        <div className="content2-grid-container">
        
            <div className="content2-grid-items">
            <div className="inner-image5"> <FontAwesomeIcon className="inner-image-icon5" icon={faApple} /> </div>
            <div className="grid-container2">
            <div className="grid-item2" style={{color:"#7854F7",fontSize:"18px",fontWeight:"800"}}>stripe</div>
            <div className="grid-item2" style={{color:"#94A2B3",fontSize:"12px",fontWeight:"400", lineHeight:"25px"}}>Stripe gateway jkgi jibo obhho oikhoh</div>
            <div className="grid-item2"><FontAwesomeIcon style={{color:"green"}} icon={faToggleOn} /></div>
            <div className="grid-item2">Paypal</div>
            <div className="grid-item2" style={{color:"#94A2B3",fontSize:"12px",fontWeight:"400", lineHeight:"25px"}}>Paypal gateway ojho oojugo </div>
            <div className="grid-item2"><FontAwesomeIcon style={{color:"green"}} icon={faToggleOn} /></div>
            <div className="grid-item2" ><FontAwesomeIcon style={{color:"#0D3883"}} icon={faHome} /></div>
            <div className="grid-item2" style={{color:"#94A2B3",fontSize:"12px",fontWeight:"400", lineHeight:"25px"}}>Bank transfers mpj hrt rst onop ojh h   </div>
            <div className="grid-item2"><FontAwesomeIcon style={{color:"green"}} icon={faToggleOn} /></div>
            </div>
            <div ><img className="card-img" src={require('../../images/laptop1.jpg')} alt=""/></div>
            <div className="card-head">All You need to Start</div>
            <div className="card-para">Add wooCommerce plugin to any wordpress site and setup a new store in minutes.</div>
            <button className="card-btn">Ecommerce for WordPress</button>
            </div>
            <div className="content2-grid-items">
            <div className="inner-image"> <FontAwesomeIcon className="inner-image-icon" icon={faFacebook} /> </div>
            <div className="inner-image1"> <FontAwesomeIcon className="inner-image-icon1" icon={faSnapchatSquare} /> </div>
            <div className="inner-image2"> <FontAwesomeIcon className="inner-image-icon2" icon={faCcPaypal} /> </div>
            <div className="inner-image3"> <FontAwesomeIcon className="inner-image-icon3" icon={faFirstOrder} /> </div>
            <div className="inner-image4"> <FontAwesomeIcon className="inner-image-icon4" icon={faGoogle} /> </div>
            <div ><img className="card-img" src={require('../../images/laptop2.jpg')} alt=""/></div>
            <div className="card-head">Customize and Extend</div>
            <div className="card-para">Form subscriptions to gym classes to luxury cars, wooCommerece is fully customizable.</div>
            <button className="card-btn">Browse Extensions</button>
            </div>
            <div className="content2-grid-items">
            <img className="working1" src={require('../../images/working1.jpg')} alt=""/>
            <img className="working2" src={require('../../images/working3.jpg')} alt=""/>
            <img className="working3" src={require('../../images/working2.jpg')} alt=""/>
            <div ><img className="card-img" src={require('../../images/laptop3.jpg')} alt=""/></div>
            <div className="card-head">Active Community</div>
            <div className="card-para">WooCommerce is one of the fastest growing eCommerce communities.</div>
            <button className="card-btn">Check our Forums</button>
            </div>
        </div>
        </div>
    )
}

export default Content2
