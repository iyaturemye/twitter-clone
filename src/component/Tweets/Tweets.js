import React from "react";
import Tweet from "./Tweet";
import "bootstrap/dist/css/bootstrap.min.css";
import tweetContent from "../../Poster4.png";
import tweetContent1 from "../../Poster2.png";

const sampleTweet = (
  <div>
    <div>``The feeling When you realize the robots will steal your job.``</div>
    <br />
    <img src={tweetContent} width="100%"/>
  </div>
);

const Tweets = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <Tweet content={sampleTweet} />
          <Tweet
            content={
              <div>
                <div>
                  The feeling When you realize the robots will steal your
                  job.
                </div>
                <br />
                <img src={tweetContent1} width="100%"/>
              </div>
            }
          />
          <Tweet content={"Tweet 2."} />
          <Tweet content={"Tweet 3."} />
        </div>
      </div>
    </div>
  );
};

export default Tweets;
