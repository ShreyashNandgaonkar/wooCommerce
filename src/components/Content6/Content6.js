import React from 'react';
import './Content6.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faLifeRing, faLock, faRss} from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

function Content6() {
    return (
        <div className="content6">
            <div className="content6-icons">
            <FontAwesomeIcon className="icons" icon={faTwitter} />
            <FontAwesomeIcon className="icons" icon={faFacebook} />
            <FontAwesomeIcon className="icons" icon={faRss} />
            <FontAwesomeIcon className="icons" icon={faInstagram} />
            </div>
            <div className="right-head">
            <p>AUTOMATIC</p>
            </div>
        </div>
    )
}

export default Content6
