import React from "react";
import TrendItem from "./TrendItem";
import { FiSettings } from "react-icons/fi";
import 'bootstrap/dist/css/bootstrap.min.css';
import './trends.css';

const Trends=()=>{
    return (
    <div className="container trends-container">
        <div className="row"></div>
        <div className="col-lg-12">
            <div className="row">
                <div className="col-lg-10"><h3>Trends for you</h3></div>
                <div className="col-lg-2">
                    <FiSettings size="20" className="settings-icon"/>
                </div>
            </div>
            <div className="row">
                <TrendItem title="Technology" element="Java" count="202"/>
                <TrendItem title="UEAFA Champions League" element="Lionel Messi" count="202"/>
                <TrendItem title="Trending in rwanda" element="Rwandan" count="202"/>
            </div>
        </div>
    </div>)
}

export default Trends;
