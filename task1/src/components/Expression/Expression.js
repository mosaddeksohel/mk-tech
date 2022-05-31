import React from "react";
import "../../css/expression.css";

const Expression = () => {
  return (
    <section
      style={{
        backgroundColor: "#644F9C",
        paddingBottom: "5%",
        paddingTop: "5%",
      }}
    >
      <h2>Tittle</h2>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <div className="expression itemT">
          <h2>1 BN+</h2>
          <h5>Daily Impressions</h5>
        </div>
        <div className="expression paid">
          <h2>$500K+</h2>
          <h5>Paid</h5>
        </div>
        <div className="expression global">
          <h2>8K+</h2>
          <h5>Global Publishers</h5>
        </div>
      </div>
    </section>
  );
};

export default Expression;
