import { Button } from "@mui/material";
import React from "react";
import img from "../../image/add-unsupported-cards-passes-apple-wallet-for-quick-easy-access-your-iphone.1280x600.jpg";

const Native = () => {
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
        <h3 style={{ color: "#FF6F00", fontFamily: "PT Sans" }}>NATIVE</h3>
        <p style={{ textAlign: "justify", fontFamily: "PT Sans " }}>
          Ad format with the image and the title, that perfectly fits into the
          content of the site. Native ads are placed in the most visible areas
          of the page and, thus, this format shows good results and the level of
          interaction.
        </p>
        <Button>learn more</Button>
      </div>
    </div>
  );
};

export default Native;
