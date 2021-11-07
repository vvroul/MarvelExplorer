import React from "react";

const styles = {
  itemDiv: {
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    width: "15%",
  },
  info: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    border: "2px solid #1ABC9C",
    padding: "5px",
    marginTop: "5px",
    height: "18vh",
  },
  item: {},
  title: {
    textAlign: "center",
    fontSize: "16px",
    color: "#F1C40F",
  },
};

const ComicsListItem = ({ comics, comic, index }) => {
  return (
    <div style={styles.itemDiv}>
      <img
        style={styles.item}
        src={
          comics[index].thumbnail["path"] +
          "/portrait_incredible." +
          comic.thumbnail["extension"]
        }
        alt="Marvel Comic"
      />
      <div style={styles.info}>
        <span style={styles.title}> {comics[index].title} </span>
        <span> Issue : {comics[index].issueNumber} </span>
        <span> Price : {comics[index].prices[0]["price"]}$</span>
      </div>
    </div>
  );
};

export default ComicsListItem;
