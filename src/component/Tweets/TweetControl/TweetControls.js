import react from "react";
import TweetControl from "./TweetControl";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaRegComment, FaRetweet } from "react-icons/fa";
import { BiLike } from "react-icons/bi";
import { FiUpload } from "react-icons/fi";

const iconStyle={fontSize:20,fontStyle:"thin"};

const tweetControls = () => {
  return (
    <div className="tweets-btn-container container">
      <div class="row">
        {/*comment*/}
        <div className="col-lg-3">
          <TweetControl icon={<FaRegComment  style={iconStyle}/>}  />
        </div>
        <div className="col-lg-3">
          {/*retweet*/}
          <TweetControl icon={<FaRetweet style={iconStyle} />} counts={10} />
        </div>
        <div className="col-lg-3">
          {/*like*/}
          <TweetControl icon={<BiLike style={iconStyle} />} counts={0} style={iconStyle} />
        </div>
        <div className="col-lg-3">
          {/* Upload */}
          <TweetControl icon={<FiUpload style={iconStyle} />} style={iconStyle}/>
        </div>
      </div>
    </div>
  );
};

export default tweetControls;
