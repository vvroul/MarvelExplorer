import React, { useState } from "react";
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

  return (
    <div id="Home">
      <Welcome />

      {comics !== [] || comics !== undefined || comics === null
        ? comics.map((comic, index) => {
            index *= 5;
            return (
              <ComicsContainer
                key={comic.id}
                comics={comics}
                comic={comic}
                index={index}
                loading={loading}
                hasMore={hasMore}
                offset={offset}
                setOffset={setOffset}
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
