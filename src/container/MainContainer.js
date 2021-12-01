import React, { Component } from "react";
import TopHeader from "../component/TopHeader";
import Createtweets from "../component/Createtweets";
import Tweets from "../component/Tweets/Tweets";
import 'bootstrap/dist/css/bootstrap.min.css';
import LeftSideBar from '../component/LeftSideBar';
import './mainContainer.css'
import LeftSideMenu from "../component/LeftSideMenu";

class MainContainer extends Component{

    render(){
        return (
        <div className="container">
            <div className="row">
                <div className="col-lg-2"> 
                    <LeftSideMenu/>
                </div>
                <div className="col-lg-7 center-side">
                  <TopHeader/>
                  <Createtweets/>
                  <Tweets/>
                </div>
                <div className="col-lg-3">
                    <LeftSideBar className="left-sideBar"/>
                </div>
            </div>
        </div>
        )
    }

}

export default MainContainer;
