import { Button } from "@mui/material";
import React from "react";
import img from "../../image/add-image-gallery2.jpg";

const Skim = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        margin: "30px",
        justifyContent: "space-around",
      }}
    >
      <div style={{ width: "40%" }}>
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
        <h3 style={{ color: "#FF6F00", fontFamily: "PT Sans" }}>SKIM</h3>
        <p style={{ textAlign: "justify", fontFamily: "PT Sans " }}>
          SKIM" is a link that a publisher inserts on a specific site element,
          and after clicking on it, an advertisement appears to the user. SKIM
          gives 100% control of your sold traffic amount, higher CR to
          advertisers and CPM rates to publishers.
        </p>
        <Button>learn more</Button>
      </div>
    </div>
  );
};

export default Skim;
