import React from "react";
import ComicsList from "../ComicsList/ComicsList";

const styles = {
  container: {
    paddingTop: "40px",
    display: "flex",
    flexDirection: "row",
  },
};

const ComicsContainer = ({
  comics,
  comic,
  index,
  loading,
  hasMore,
  setOffset,
  offset,
}) => {
  return (
    <div key={comic.id} style={styles.container}>
      <ComicsList
        comics={comics}
        comic={comic}
        index={index}
        loading={loading}
        hasMore={hasMore}
        setOffset={setOffset}
        offset={offset}
      />
    </div>
  );
};

export default ComicsContainer;
