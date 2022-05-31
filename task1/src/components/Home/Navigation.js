import { Button } from "@mui/material";
import React from "react";
import "../../css/navigation.css";

const Navigation = () => {
  return (
    <>
      <div style={{ textAlign: "left", marginLeft: "5%" }}>
        <h1 style={{ fontFamily: "arial", fontWeight: "800" }}>LOGO</h1>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginLeft: "5%",
          marginRight: "5%",
        }}
      >
        <div>
          <Button
            className="navbtn"
            style={{ color: "#644F9C", fontWeight: "500" }}
          >
            HOME
          </Button>
          <Button
            className="navbtn"
            style={{ color: "#644F9C", fontWeight: "500" }}
          >
            ADVERTISERS
          </Button>
          <Button
            className="navbtn"
            style={{ color: "#644F9C", fontWeight: "500" }}
          >
            PUBLISHERS{" "}
          </Button>
          <Button
            className="navbtn"
            style={{ color: "#644F9C", fontWeight: "500" }}
          >
            INFLUENCERS{" "}
          </Button>
          <Button
            className="navbtn"
            style={{ color: "#644F9C", fontWeight: "500" }}
          >
            AD FORMATS
          </Button>
          <Button
            className="navbtn"
            style={{ color: "#644F9C", fontWeight: "500" }}
          >
            BLOG
          </Button>
          <Button
            className="navbtn"
            style={{ color: "#644F9C", fontWeight: "500" }}
          >
            CONTACT US
          </Button>
        </div>
        <div style={{ display: "flex" }}>
          <Button className="navbtn" style={{ padding: "10px" }}>
            Login
          </Button>
          <Button className="navbtn" style={{ padding: "10px" }}>
            signup
          </Button>
        </div>
      </div>
    </>
  );
};

export default Navigation;
