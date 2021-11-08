import React, { useRef, useCallback } from "react";

const styles = {
  itemDiv: {
    display: "inline-block",
    width: "16%",
    margin: "0 auto",
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
    fontSize: "1.4vw",
    color: "#F1C40F",
  },
  otherInfo: {
    textAlign: "center",
    fontSize: "1.4vw",
  },
};

const ComicsListItem = ({
  comics,
  comic,
  index,
  loading,
  hasMore,
  setOffset,
  offset,
}) => {
  const observer = useRef();
  const lastComicRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setOffset(offset + 20);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, setOffset, offset]
  );

  if (comics.length === index + 1) {
    return (
      <div ref={lastComicRef} key={comic.id} style={styles.itemDiv}>
        <img
          style={styles.item}
          width="100%"
          height="auto"
          display="inline-block"
          src={
            comics[index].thumbnail["path"] +
            "/portrait_incredible." +
            comic.thumbnail["extension"]
          }
          alt="Marvel Comic"
        />
        <div key={comic.id} style={styles.info}>
          <span style={styles.title}> {comics[index].title} </span>
          <span style={styles.otherInfo}>
            {" "}
            Issue : {comics[index].issueNumber}{" "}
          </span>
          <span style={styles.otherInfo}>
            {" "}
            Price : {comics[index].prices[0]["price"]}$
          </span>
        </div>
      </div>
    );
  } else {
    return (
      <div key={comic.id} style={styles.itemDiv}>
        <img
          style={styles.item}
          width="100%"
          height="auto"
          display="inline-block"
          src={
            comics[index].thumbnail["path"] +
            "/portrait_incredible." +
            comic.thumbnail["extension"]
          }
          alt="Marvel Comic"
        />
        <div key={comic.id} style={styles.info}>
          <span style={styles.title}> {comics[index].title} </span>
          <span style={styles.otherInfo}>
            {" "}
            Issue : {comics[index].issueNumber}{" "}
          </span>
          <span style={styles.otherInfo}>
            {" "}
            Price : {comics[index].prices[0]["price"]}$
          </span>
        </div>
      </div>
    );
  }
};

export default ComicsListItem;
