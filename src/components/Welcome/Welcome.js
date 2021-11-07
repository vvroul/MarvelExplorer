import React from "react";

const styles = {
  div: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    paddingTop: "40px",
  },
  h1: {
    color: "white",
    fontSize: "3vw",
    width: "100%",
    height: "10vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#202020",
    fontFamily: "SyneMono-Regular",
  },
  h2: {
    color: "white",
    paddingTop: "20px",
    fontSize: "2vw",
    fontFamily: "SyneMono-Regular",
  },
};

const Welcome = () => {
  return (
    <div style={styles.div}>
      <h1 style={styles.h1}> Welcome to the Marvel Explorer! </h1>
      <h2 style={styles.h2}>
        {" "}
        Below you can find a list of all the new Marvel comics releases.{" "}
      </h2>
      <h2 style={styles.h2}>
        {" "}
        Do you have an all time favorite? Our catalog probably has it too!{" "}
      </h2>
    </div>
  );
};

export default Welcome;
