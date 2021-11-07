import React, { useEffect, useState } from "react";
// import ComicsList from '../ComicsList/ComicsList'

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
    fontSize: "30px",
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
    fontFamily: "SyneMono-Regular",
  },
  container: {
    display: "flex",
  },
  comics: {
    flex: "30%",
    padding: "5px",
    width: "100%",
  },
  item: {
    padding: "10px",
  },
};

const HomePage = () => {
  const [comics, setComics] = useState([]);

  useEffect(() => {
    fetch(
      "http://gateway.marvel.com/v1/public/comics?ts=1&format=comic&formatType=comic&apikey=d56d6d10d8f49278e403ae7884dbae86"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data.results);
        setComics(data.data.results);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div id="Home">
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
      {comics !== []
        ? comics.map((comic, index) => (
            index *= 5,
            console.log(comic.title),
            <div key={comic.id} style={styles.container}>
              <div style={styles.comics}>
                {/* <h3> Title : {comic.title} </h3>
              <h3> Issue Number : {comic.issueNumber} </h3> */}
                {comics[index] !== undefined ? (
                  <img
                    style={styles.item}
                    src={
                      comics[index].thumbnail["path"] +
                      "/portrait_incredible." +
                      comic.thumbnail["extension"]
                    }
                    alt="Marvel Comic"
                  />
                ) : null}
                {comics[index + 1] !== undefined ? (
                  <img
                    style={styles.item}
                    src={
                      comics[index + 1].thumbnail["path"] +
                      "/portrait_incredible." +
                      comic.thumbnail["extension"]
                    }
                    alt="Marvel Comic"
                  />
                ) : null}
                {comics[index + 2] !== undefined ? (
                  <img
                    style={styles.item}
                    src={
                      comics[index + 2].thumbnail["path"] +
                      "/portrait_incredible." +
                      comic.thumbnail["extension"]
                    }
                    alt="Marvel Comic"
                  />
                ) : null}
                {comics[index + 3] !== undefined ? (
                  <img
                    style={styles.item}
                    src={
                      comics[index + 3].thumbnail["path"] +
                      "/portrait_incredible." +
                      comic.thumbnail["extension"]
                    }
                    alt="Marvel Comic"
                  />
                ) : null}
                {comics[index + 4] !== undefined ? (
                  <img
                    style={styles.item}
                    src={
                      comics[index + 4].thumbnail["path"] +
                      "/portrait_incredible." +
                      comic.thumbnail["extension"]
                    }
                    alt="Marvel Comic"
                  />
                ) : null}
              </div>
            </div>
          ))
        : null}
    </div>
  );
};

export default HomePage;
