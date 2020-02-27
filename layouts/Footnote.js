import React from "react";

export default ({ children }) => (
  <div
    style={{
      position: "fixed",
      bottom: 0,
      fontSize: "smaller",
      textAlign: "left",
      width: "80%"
    }}
  >
    {children}
  </div>
);
