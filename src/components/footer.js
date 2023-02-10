import React from "react";
import instagram from "./images/instagram-logo.png";
import linkedin from "./images/linkedin-logo.png";

function footer() {
  return (
    <div class="bottom-area">
      <div class="footer">
        <div class="footer-left">
          <p>Prompt Generator</p>
          <p>Dweep Daily</p>
          <p>All Contributors</p>
          <p>Your data on Dweep.io</p>
          <p>Contribute to Dweep</p>
        </div>
        <div class="footer-right">
          <p>Dweep.io</p>
          <p>Made with love in India</p>
          <p>
            <img src={linkedin} alt="" />
            <img src={instagram} alt="" />
          </p>
          <p id="dummy-text">dummy text</p>
          <p>hello@dweep.io</p>
        </div>
      </div>
    </div>
  );
}

export default footer;
