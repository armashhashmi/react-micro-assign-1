import React from "react";
import man from "./images/man.png";

function header() {
  return (
    <div class="main">
      <div class="left-main">
        <h1 class="primary-title">
          An inspiring design delivered to your inbox every morning
        </h1>
        <p class="primary-text">
          Our team scouts the internet for the best designs, illustrations and
          art and delivers a truly inspiring one every day to your inbox
        </p>
        <h3 class="secondry-title">Show me how it looks</h3>
        <div class="registration">
          <input
            type="email"
            id="email"
            required
            placeholder="Your email address"
          />
          <button class="btn">Registor Now</button>
        </div>
        <p class="secondry-text">Free - No Spam - No Data Sharing</p>
      </div>
      <div class="right-main">
        <img src={man} alt="" />
      </div>
    </div>
  );
}

export default header;
