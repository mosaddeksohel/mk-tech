import { Grid } from "@mui/material";
import React from "react";
import img from "../../image/createbanners.jpg";

const Content = () => {
  return (
    <div style={{}}>
      <Grid
        container
        spacing={2}
        sx={{ alignItems: "center", justifyContent: "center", mar: "20px" }}
      >
        <Grid item xs={5}>
          <p
            style={{
              fontFamily: "Prototype",
              textAlign: "justify",
              fontSize: "18px",
            }}
          >
            A bit further down they share FAQs such as “Where can I find
            MoonPies in my area.” and “Are MoonPies kosher?” Only after sharing
            that information do they give you a contact form. The contact form
            isn’t hidden at all – but they sure do everything they can to answer
            your questions before giving you the contact form.
          </p>
        </Grid>
        <Grid item xs={5}>
          <img style={{ width: "100%" }} className="fluid" src={img} alt="" />
        </Grid>
      </Grid>
    </div>
  );
};

export default Content;
