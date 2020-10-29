import React from 'react';
import DotGrid10 from '../DotGrid/DotGrid10';
import './Content3.css'

function Content3() {
    return (
        <div className="curve">
        <div className="circle-shape">
        <svg height="300" width="300">
        <circle cx="50" cy="50" r="40" stroke="orange" stroke-width="4" fill="#7854F7" />
        </svg>
        </div>
        <div className="circle-shape1">
        <svg height="300" width="300">
        <circle cx="150" cy="140" r="140" stroke="orange" stroke-width="4" fill="#7854F7" />
        </svg>
        </div>
        <div className="content3-dot">
        <DotGrid10 />
        </div>
        <img className="card-img-3" src={require('../../images/card1.jpg')} alt=""/> 
        <div className="content3-card">
        <div className="content3-head">Develop <br />without Limits</div>
        <div className="content3-middle">WooCommerce is developer friendly, too. Built with a REST API, WooCommerce is scalable and can integrate with virtually any service. Design a complex store from scratch, extend a store for a client, or simply add a single product to a WordPress site—your store, your way.</div>
        <button className="content3-btn">Read the Documentation</button>
        </div>
        <div className="circle-shape3">
        <svg height="300" width="300">
        <circle cx="50" cy="50" r="40" stroke="orange" stroke-width="4" fill="#7854F7" />
        </svg>
        </div>
        <img className="card-img-3-2" src={require('../../images/card2.jpg')} alt=""/> 
        <div className="content3-card2">
        <div className="content3-head">Know our <br /> Global Community</div>
        <div className="content3-middle">WooCommerce is one of the fastest-growing eCommerce communities. We’re proud that the helpfulness of the community and a wealth of online resources are frequently cited as reasons our users love it. There are 80+ meetups worldwide!</div>
        <button className="content3-btn">Read the Documentation</button>
        </div>
        
        </div>
    )
}

export default Content3
