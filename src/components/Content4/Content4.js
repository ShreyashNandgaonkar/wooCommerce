import React,{useState, useEffect} from 'react';
import DotGrid10 from '../DotGrid/DotGrid10';
import DotGrid3 from '../DotGrid/DotGrid3';
import './Content4.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltLeft, faLongArrowAltRight} from '@fortawesome/free-solid-svg-icons'

function Content4() {
    const [large, setLarge] = useState(null);
    const [medium, setMedium] = useState(null);
    const [thumbnail, setThumbnail] = useState(null);
    const [first, setFirst] = useState(null);
    useEffect(() => {
        fetch('https://randomuser.me/api/')
          .then(results => results.json())
          .then(data => {
            const {picture, name} = data.results[0];
            setLarge(picture.large);
            setMedium(picture.medium);
            setThumbnail(picture.thumbnail);
            setFirst(name.first);
          });
      }, []);
    return (
        <div className="Content4">
        <div className="content4">
        <div className="content4-main">
        <p className="content4-head">Trusted by Agencies & Store Owners</p>
        </div>
        </div>
        <div className="hover-img1">
        <img className="content4-img1" src={large} alt=""/>
        <div>{first}</div>
        </div>
        <div className="hover-img2">
        <img className="content4-img2" src={medium} alt=""/>
        <div>{first}</div>
        </div>
        <div className="hover-img3">
        <img className="content4-img3" src={medium} alt=""/>
        <div>{first}</div>
        </div>
        <div className="hover-img4">
        <img className="content4-img4" src={medium} alt=""/>
        <div>{first}</div>
        </div>
        <div className="hover-img5">
        <img className="content4-img5" src={large} alt=""/>
        <div>{first}</div>
        </div>
        <div className="hover-img6">
        <img className="content4-img6" src={medium} alt=""/>
        <div>{first}</div>
        </div>
        <div className="dot-3">
        <DotGrid3 />
        </div>
        <div className="alter">
        <DotGrid10 />
        </div>
        <div className="content4-card1">&nbsp;</div>
        <div className="content4-card2">&nbsp;</div>
        <div className="content4-card">
            <p className="content4-card-details"> No other eCommerce platform allows people to start for free and grow their store as their business grows. More importantly, WooCommerce doesn't charge you a portion of your profits as your business grows!</p>
        </div>
        <div className="arrow">
        <FontAwesomeIcon style={{marginRight:'15px', color:"gray"}} icon={faLongArrowAltLeft} />
        <FontAwesomeIcon icon={faLongArrowAltRight} />
        </div>
        </div>
    )
}

export default Content4
