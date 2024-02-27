import { Html, useProgress } from "@react-three/drei";
import React from "react";

const CanvasLoader = () => {
  const { progress } = useProgress();

  return (
    <Html
      as="div"
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <span className="canvas-load"></span>
      <p
        style={{
          fontSize: 14,
          color: "#1e1e1e",
          fontWeight:800,
          marginTop:40
        }}
      >
        {progress.toFixed(2)}%</p>
    </Html>
  );
};

export default CanvasLoader;
