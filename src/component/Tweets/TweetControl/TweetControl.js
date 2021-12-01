import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './TweetControl.css';

const TweetControl=(props)=>{
    return(
        <div className="tweet-btn-container">
            {props.icon}
            <label className="tweet-btn-count">{props.counts}</label>
        </div>
    )
}

export default TweetControl;
