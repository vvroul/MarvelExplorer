import React from "react";
import ComicsList from "../ComicsList/ComicsList";

const styles = {
  container: {
    paddingTop: "40px",
    display: "flex",
    flexDirection: "row",
    backgroundColor: "yellow",
  },
};

const ComicsContainer = ({ comics, comic, index }) => {
  return (
    <div key={comic.id} style={styles.container}>
      <ComicsList comics={comics} comic={comic} index={index} />
    </div>
  );
};

export default ComicsContainer;
