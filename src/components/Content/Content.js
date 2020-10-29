import React from 'react';
import DotGrid from '../DotGrid/DotGrid';
import './Content.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebook} from '@fortawesome/free-brands-svg-icons';
import { faCoffee , faToggleOn, faHome, faCartPlus, faArrowRight, faShieldAlt} from '@fortawesome/free-solid-svg-icons'

function Content() {
  return (
    <div className="Content">
      <p className="Content-head">Building exactly the eCommerce website you want.</p>
      <p className="Content-head-2">WooCommerce is a customizable open source eCommerce platform built on wordpress.</p>
      <p className="Content-head-3">Get started quickly and make you way.</p>
      <DotGrid />
      <div className="inner-image10"> <FontAwesomeIcon className="inner-image-icon10" icon={faShieldAlt} /> </div>
      <div className="dot3">
      <DotGrid />
      </div>
      <div className="dot">
      <DotGrid />
      <img src={require('../../images/shoes.jpg')} id="shoes" alt="shoes"/>
      <img src={require('../../images/girls.jpg')} id="girls" alt="girl"/>
      <button className="sale-btn">Sale</button>
      <div className="grid-container">
      <div className="grid-item" style={{color:"#7854F7",fontSize:"18px",fontWeight:"800"}}>stripe</div>
      <div className="grid-item" style={{color:"#94A2B3",fontSize:"12px",fontWeight:"400", lineHeight:"25px"}}>Stripe gateway</div>
      <div className="grid-item"><FontAwesomeIcon style={{color:"green"}} icon={faToggleOn} /></div>
      <div className="grid-item">Paypal</div>
      <div className="grid-item" style={{color:"#94A2B3",fontSize:"12px",fontWeight:"400", lineHeight:"25px"}}>Paypal gateway</div>
      <div className="grid-item"><FontAwesomeIcon style={{color:"green"}} icon={faToggleOn} /></div>
      <div className="grid-item" ><FontAwesomeIcon style={{color:"#0D3883"}} icon={faHome} /></div>
      <div className="grid-item" style={{color:"#94A2B3",fontSize:"12px",fontWeight:"400", lineHeight:"25px"}}>Bank transfers</div>
      <div className="grid-item"><FontAwesomeIcon style={{color:"green"}} icon={faToggleOn} /></div>
      </div>
      <div className="cart-div">
      <FontAwesomeIcon  className="cart" icon={faCartPlus} />
      </div>
      
      </div>
      
       <button style={{outline:"none",cursor:"pointer",backgroundColor:"#7854F7", borderRadius:"60px", width:"267px", height:"72px", fontSize:"18px", lineHeight:"21.09px", color:"white", border:"transparent"}}>Start a New Store</button>
      <p style={{color:"#94A2B3", position:"relative", top:"-65px", left:"285px"}}>or</p>
      <p style={{color:"#94A2B3", fontWeight:"700",fontSize:"22px",position:"relative", top:"-112px", left:"310px"}}>Customize & Entend<FontAwesomeIcon style={{fontSize:"15px",paddingLeft:"5px"}} icon={faArrowRight}/></p>

    </div>
  )
}

export default Content
