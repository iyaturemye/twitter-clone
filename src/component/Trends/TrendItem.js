import React from "react";
import { BsThreeDots } from "react-icons/bs";
import 'bootstrap/dist/css/bootstrap.min.css';

const TrendItem=(props)=>{
    return (
        <div className="container trend-item">
            <div className="row">
                <div className="col-lg-10">
                   <div className="trends-title">
                   <span>{props.title}.Trending</span> 
                   </div>
                   <div>
                       <b>{props.element}</b>
                   </div>
                   <div>
                        <span>
                            {props.count} Tweets
                       </span>
                   </div>
                </div>
                <div className="col-lg-2">
                    <BsThreeDots className="dots-icon"/>
                </div>
            </div>
        </div>
    )
}

export default TrendItem;
