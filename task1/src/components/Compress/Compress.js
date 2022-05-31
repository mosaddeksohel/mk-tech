import React from "react";
import "../../css/compress.css";
import VolumeMuteIcon from "@mui/icons-material/VolumeMute";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";

import NetworkCheckIcon from "@mui/icons-material/NetworkCheck";

const Compress = () => {
  return (
    <div style={{ marginBottom: "4rem" }}>
      <h2>Audiance fairwell</h2>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <div className="classItem">
          <h3 className="item">
            <VolumeMuteIcon style={{ fontSize: "60px", color: "#1E90FF" }} />
          </h3>
          <h4>Sound</h4>
          <button className="btn">Send</button>
        </div>
        <div className="classItem">
          <h3 className="item">
            <RocketLaunchIcon style={{ fontSize: "60px", color: "#1E90FF" }} />
          </h3>
          <h4>Rocket Fly</h4>

          <button className="btn">Send</button>
        </div>
        <div className="classItem">
          <h3 className="item">
            <NetworkCheckIcon style={{ fontSize: "60px", color: "#1E90FF" }} />
          </h3>
          <h4>Network</h4>

          <button className="btn">Send</button>
        </div>
      </div>
    </div>
  );
};

export default Compress;
