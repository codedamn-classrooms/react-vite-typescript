import "./App.css";
import React from "react";

function App() {
  return (
    <>
      <img
        src="https://codedamn-website-assets.s3.amazonaws.com/uploads/oqBMX4cxj0HjvM9KMx3lN/react-typescript.png"
        alt="react typescript"
        width="256px"
      />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h3>Powered by</h3>
        <img
          src="https://avatars.githubusercontent.com/u/37881195?s=280&v=4"
          width="32px"
        />
      </div>
    </>
  );
}

export default App;
