import { Button } from "@mui/material";
import React from "react";
import { Link, Outlet } from "react-router-dom";
import "../../css/adformat.css";

const AdFormat = () => {
  return (
    <div>
      <div className="adformat">
        <Link to="pop" className="button">
          <Button>POP-UNDER</Button>
        </Link>
        <Link to="banner" className="button">
          <Button>BANNER AD </Button>
        </Link>
        <Link to="native" className="button">
          <Button>NATIVE</Button>
        </Link>
        <Link to="skim" className="button">
          <Button>SKIM</Button>
        </Link>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default AdFormat;
