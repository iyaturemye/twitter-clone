import React from "react";
import { GoVerified } from "react-icons/go";
import 'bootstrap/dist/css/bootstrap.min.css';
import profileImage from '../../avatar.png';
import './Tweets.css';
import TweetControls from './TweetControl/TweetControls';

const iconStyle = { color: "rgb(10, 144, 221)"}
const tweetControlStyle={marginTop:"10px"};

const tweet=(props)=>{
    return (
        <div className="container tweet-container">
            <div className="row">
                <div className="col-lg-1">
                    <img src={profileImage} width="50"/>
                </div>   
                <div className="col-lg-11">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="profile-name">
                                <span><b>Iyaturemye Claude</b></span>
                                <span><GoVerified style={iconStyle}/></span>
                                <span>12h</span>
                            </div>
                        </div>
                    </div>
                    <div className="row tweet-content">
                        <div className="col-lg-12">
                            {props.content}
                        </div>
                    </div>
                    <div className="row tweet-controls" style={tweetControlStyle}>
                        <TweetControls/>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default tweet;