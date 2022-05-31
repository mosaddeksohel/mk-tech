import { Button } from "@mui/material";
import React from "react";
import img from "../../image/twkGfN0.png";

const Banner = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        margin: "30px",
        justifyContent: "space-around",
      }}
    >
      <div style={{ width: "70%", height: "40%" }}>
        <img className="fluid " style={{ width: "50%" }} src={img} alt="" />
      </div>
      <div
        style={{
          width: "40%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <h3 style={{ color: "#FF6F00", fontFamily: "PT Sans" }}>BANNER AD</h3>
        <p style={{ textAlign: "justify", fontFamily: "PT Sans " }}>
          Choose between the available banner formats. Highly effective ad for
          visibility
        </p>
        <Button>learn more</Button>
      </div>
    </div>
  );
};

export default Banner;
