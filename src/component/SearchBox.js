import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './SearchBox.css';

const searchBox=()=>{
    return (
        <div className="container search-box-container">
            <div className="row">
                <div className="col-lg-12">
                    <input type="text" className="form-control"/>
                </div>
            </div>
        </div>
    )
}

export default searchBox;
