import React from "react";

function App() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "30px",
          padding: "0px",
          alignItems: "center",
          justifyContent: "start",
        }}
      >
        <img
          src="https://codedamn-website-assets.s3.amazonaws.com/uploads/oqBMX4cxj0HjvM9KMx3lN/react-typescript.png"
          alt="react typescript"
          width="256px"
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "30px",
          padding: "0px",
        }}
      >
        <h3 style={{ margin: "0px", padding: "0px", textAlign: "center" }}>
          Powered by
        </h3>
        <img
          src="https://codedamn-website-assets.s3.amazonaws.com/uploads/BGzqqkkFRD8Fnvsi2-CXa/codedamn-logo-with-text.png"
          height="128px"
        />
      </div>
    </>
  );
}

export default App;
