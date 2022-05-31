import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import React from "react";
import "../../css/style.css";

const Footer = () => {
  return (
    <section className="footer">
      <div>
        <h3>Follow us on</h3>
        <span style={{ color: "red", fontSize: "2rem", borderRadius: "100%" }}>
          <InstagramIcon />
        </span>
        <span
          style={{ color: "	#4267B2", fontSize: "2rem", borderRadius: "100%" }}
        >
          <FacebookIcon />
        </span>
        <span
          style={{ color: "	#FF0000", fontSize: "2rem", borderRadius: "100%" }}
        >
          <YouTubeIcon />
        </span>
        <h2>LOGO</h2>
      </div>
      <div>
        <h4>ADVERTISERS </h4>
        <h4>PUBLISHERS </h4>
        <h4>INFLUENCERS </h4>
        <h4>AD FORMATS </h4>
      </div>
      <div>
        <h4>TERMS & CONDITIONS</h4>
        <h4>PRIVACY POLICY </h4>
        <h4>CANCELLATION POLICY </h4>
        <h4>BLOG</h4>
      </div>
      <div>
        <h4>FAQ</h4>
        <h4>MEDIA KIT </h4>
        <h4>CONTACT US </h4>
      </div>
    </section>
  );
};

export default Footer;
