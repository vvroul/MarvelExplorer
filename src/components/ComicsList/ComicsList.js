import React from "react";
import ComicsListItem from "./ComicsListItem";
<script src="https://polyfill.io/v2/polyfill.min.js?features=IntersectionObserver"></script>;

const styles = {
  comics: {
    backgroundColor: "cyan",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
};

const ComicsList = ({ comics, comic, index }) => {
  return (
    <div key={comic.id} style={styles.comics}>
      {comics[index] !== undefined ? (
        <ComicsListItem comics={comics} comic={comic} index={index} />
      ) : null}
      {comics[index + 1] !== undefined ? (
        <ComicsListItem comics={comics} comic={comic} index={index + 1} />
      ) : null}
      {comics[index + 2] !== undefined ? (
        <ComicsListItem comics={comics} comic={comic} index={index + 2} />
      ) : null}
      {comics[index + 3] !== undefined ? (
        <ComicsListItem comics={comics} comic={comic} index={index + 3} />
      ) : null}
      {comics[index + 4] !== undefined ? (
        <ComicsListItem comics={comics} comic={comic} index={index + 4} />
      ) : null}
    </div>
  );
};

export default ComicsList;
