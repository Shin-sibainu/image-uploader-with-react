import React from "react";
import LinearProgress from "@mui/material/LinearProgress";
import "./Loading.css";

const Loading = ({ value }) => {
  return (
    <div className="loadingBox">
      <p>Loading</p>
      <LinearProgress variant="determinate" value={value} />
      <p>{value}%</p>
    </div>
  );
};

export default Loading;
