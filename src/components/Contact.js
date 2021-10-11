import React from "react";
import linkedIn from "./linkedIn.png";
import fblogo from "./fblogo.png";

function Contact() {
  return (
    <div className="content">
      <p className="linkedin">
        <img id="12" alt="linkedIn" src={linkedIn} />
        LinkedIn:
        <a href="https://www.linkedin.com/in/bebark-sajjad-03a318201">
          {" "}
          https://www.linkedin.com/in/bebark-sajjad-03a318201
        </a>
      </p>

      <p className="fblogo">
        <img id="11" alt="fblogo" src={fblogo} />
        Facebook:
        <a href="https://www.facebook.com/baloch.bebark.9277">
          {" "}
          https://www.facebook.com/baloch.bebark.9277
        </a>
      </p>
    </div>
  );
}
export default Contact;
