import React from "react";
import ComicsListItem from "./ComicsListItem";
<script src="https://polyfill.io/v2/polyfill.min.js?features=IntersectionObserver"></script>;

const styles = {
  comics: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
};

const ComicsList = ({
  comics,
  comic,
  index,
  loading,
  hasMore,
  setOffset,
  offset,
}) => {
  return (
    <div key={comic.id} style={styles.comics}>
      {comics[index] !== undefined ? (
        <ComicsListItem
          comics={comics}
          comic={comic}
          index={index}
          loading={loading}
          hasMore={hasMore}
          setOffset={setOffset}
          offset={offset}
        />
      ) : null}
      {comics[index + 1] !== undefined ? (
        <ComicsListItem
          comics={comics}
          comic={comic}
          index={index + 1}
          loading={loading}
          hasMore={hasMore}
          setOffset={setOffset}
          offset={offset}
        />
      ) : null}
      {comics[index + 2] !== undefined ? (
        <ComicsListItem
          comics={comics}
          comic={comic}
          index={index + 2}
          loading={loading}
          hasMore={hasMore}
          setOffset={setOffset}
          offset={offset}
        />
      ) : null}
      {comics[index + 3] !== undefined ? (
        <ComicsListItem
          comics={comics}
          comic={comic}
          index={index + 3}
          loading={loading}
          hasMore={hasMore}
          setOffset={setOffset}
          offset={offset}
        />
      ) : null}
      {comics[index + 4] !== undefined ? (
        <ComicsListItem
          comics={comics}
          comic={comic}
          index={index + 4}
          loading={loading}
          hasMore={hasMore}
          setOffset={setOffset}
          offset={offset}
        />
      ) : null}
    </div>
  );
};

export default ComicsList;
