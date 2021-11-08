import React, { useState, useRef, useCallback } from "react";
import Welcome from "../Welcome/Welcome.js";
import ComicsContainer from "../ComicsContainer/ComicsContainer.js";
import useLoadComics from "../hooks/useLoadComics/useLoadComics.js";

const styles = {
  loading: {
    textAlign: "center",
    marginTop: "40px",
    fontSize: "2vw",
    color: "white",
  },
};

const HomePage = () => {
  const [offset, setOffset] = useState(0);
  const { comics, loading, error, hasMore } = useLoadComics(offset);
  const observer = useRef();
  const lastComicElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          console.log("visivle");
          setOffset(offset + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  return (
    <div id="Home">
      <Welcome />
      {comics !== [] && comics !== undefined
        ? comics.map((comic, index) => {
            index *= 5;
            return (
              <ComicsContainer
                key={comic.id}
                comics={comics}
                comic={comic}
                index={index}
              />
            );
          })
        : null}
      <div style={styles.loading}> {loading && "Loading..."} </div>
      <div style={styles.loading}> {error && "Error..."} </div>
    </div>
  );
};

export default HomePage;
