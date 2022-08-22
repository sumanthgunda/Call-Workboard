import React from "react";
import Render from "../utilityComponents/Render";

function HomePage(props) {
  const data = props.data;
  const data1 = props.data1;
  return (
    <div
      style={{
        height: "98%",
        padding: "1vw",
        paddingBottom: "0px",
        boxSizing: "border-box",
      }}
    >
      <Render data={data && data} data1={data1 && data1} />
    </div>
  );
}

export default HomePage;
