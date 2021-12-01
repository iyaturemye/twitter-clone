import Button from "@restart/ui/esm/Button";
import React from "react";
import {GrEmoji,GrFormSchedule} from "react-icons/gr";
import {RiFileGifLine,RiGalleryLine} from "react-icons/ri";
import { BiPoll } from "react-icons/bi";
import 'bootstrap/dist/css/bootstrap.min.css';
import profileImage from '../avatar.png';
import './CreateTweets.css';

const iconStyle = { color: "rgb(10, 144, 221)"}


const CreateTweets=()=>{
    return (
        <div className="container create-tweets-container">
            <div className="row">
                <div className="col-lg-2">
                    <img src={profileImage} width="70"/>
                </div>
                <div className="col-lg-10">
                    <div className="what-happening">
                        <span className="default-cr-tweets">What's happening</span>
                    </div>
                    <div className="reply">
                        <label className="reply-label">Everyone can reply</label>
                    </div>
                    <div className="row">
                        <div className="col-lg-10">
                            <RiGalleryLine style={iconStyle}/> 
                            <RiFileGifLine  style={iconStyle}/>
                            <BiPoll  style={iconStyle}/><GrEmoji  style={iconStyle}/>
                            <GrFormSchedule  style={iconStyle}/>
                        </div>
                        <div className="col-lg-2">
                            <Button className="btn btn-primary tweet-btn">Tweet</Button>
                        </div>
                    </div>
                </div>
            </div>
            <br/>
        </div>
    )
}

export default CreateTweets;
