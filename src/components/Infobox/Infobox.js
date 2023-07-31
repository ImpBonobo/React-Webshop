import React from 'react';
import './Infobox.css';

function Infobox(props) {

    return (
        <div className="info-box">
            <div className="info-head">
                <h1><i className="fas fa-info-circle"></i></h1>
            </div>
            <div className="info-body">
                <p>{props.information}</p>
            </div>
        </div>
    )
}

export default Infobox;
