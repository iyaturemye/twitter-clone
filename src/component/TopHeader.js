import 'bootstrap/dist/css/bootstrap.min.css';
import { BsStars } from "react-icons/bs";
import './TopHeader.css';


const TopHeader=()=>{
    return (
        <div className="container top-header-main">
            <div className="row">
                <div className="col-lg-11"><h3>Home</h3></div>
                <div className="col-lg-1">
                    <BsStars size="20"/>
                </div>
            </div>
        </div>
    )
}

export default TopHeader;
