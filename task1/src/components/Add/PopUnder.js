import { Button } from "@mui/material";
import React from "react";
import img from "../../image/add-symptoms-in-women-20394_FINAL-4972a3e244a54b04bdbf383fa3d95e41.png";

const PopUnder = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        margin: "30px",
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
        <h3 style={{ color: "#FF6F00", fontFamily: "PT Sans" }}>POP-UNDER</h3>
        <p style={{ textAlign: "justify", fontFamily: "PT Sans " }}>
          This is one of the most popular ads. After user’s click, this ad opens
          landing page in behind. So, the user experience is not hampered much.
        </p>
        <Button>learn more</Button>
      </div>
    </div>
  );
};

export default PopUnder;
