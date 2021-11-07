import React, { useEffect, useState } from "react";
// import ComicsList from '../ComicsList/ComicsList'
<script src="js/md5.min.js"></script>

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
    paddingTop: "40px",
    display : "flex",
    flexDirection : "row",
    backgroundColor : "yellow",
  },
  comics: {
    backgroundColor : "cyan",
    display : "flex",
    flexDirection : "row",
    justifyContent: "center",
  },
  itemDiv: {
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    width: "15%",
  },
  info : { 
    display : "flex",
    flexDirection : "column",
    alignItems : "center",
    justifyContent : "center",
    color : "white",
    border: "2px solid #1ABC9C",
    padding : "5px",
    marginTop : "5px",
    height : "18vh",
  },
  item: {},
  title : {
    textAlign : "center",
    fontSize : "16px",
    color : "#F1C40F",
  },
};

const HomePage = () => {
  const [comics, setComics] = useState([]);

  useEffect(() => {
    let md5 = require('md5');
    let keyComb = "19c3414fb83f3b7242c9b264359c0ebcf788efe7bd56d6d10d8f49278e403ae7884dbae86"
    let hash = md5(keyComb);
    fetch(
      `http://gateway.marvel.com/v1/public/comics?ts=1&format=comic&formatType=comic&apikey=d56d6d10d8f49278e403ae7884dbae86&hash=${hash}`
    )
      .then((res) => res.json())
      .then((data) => {
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
        ? comics.map(
            (comic, index) => {
              index *= 5
              return (
                <div key={comic.id} style={styles.container}>
                  <div style={styles.comics}>
                    {comics[index] !== undefined ? (
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
                          <span>
                            {" "}
                            Price : {comics[index].prices[0]["price"]}$
                          </span>
                        </div>
                      </div>
                    ) : null}
                    {comics[index + 1] !== undefined ? (
                      <div style={styles.itemDiv}>
                        <img
                          style={styles.item}
                          src={
                            comics[index + 1].thumbnail["path"] +
                            "/portrait_incredible." +
                            comic.thumbnail["extension"]
                          }
                          alt="Marvel Comic"
                        />
                        <div style={styles.info}>  
                          <span style={styles.title}> {comics[index + 1].title} </span>
                          <span> Issue : {comics[index + 1].issueNumber} </span>
                          <span>
                            {" "}
                            Price : {comics[index + 1].prices[0]["price"]}$
                          </span>
                        </div>
                      </div>
                    ) : null}
                    {comics[index + 2] !== undefined ? (
                      <div style={styles.itemDiv}>
                        <img
                          style={styles.item}
                          src={
                            comics[index + 2].thumbnail["path"] +
                            "/portrait_incredible." +
                            comic.thumbnail["extension"]
                          }
                          alt="Marvel Comic"
                        />
                        <div style={styles.info}>  
                          <span style={styles.title}> {comics[index + 2].title} </span>
                          <span> Issue : {comics[index + 2].issueNumber} </span>
                          <span>
                            {" "}
                            Price : {comics[index + 2].prices[0]["price"]}$
                          </span>
                        </div>
                      </div>
                    ) : null}
                    {comics[index + 3] !== undefined ? (
                      <div style={styles.itemDiv}>
                        <img
                          style={styles.item}
                          src={
                            comics[index + 3].thumbnail["path"] +
                            "/portrait_incredible." +
                            comic.thumbnail["extension"]
                          }
                          alt="Marvel Comic"
                        />
                        <div style={styles.info}>  
                          <span style={styles.title}> {comics[index + 3].title} </span>
                          <span> Issue : {comics[index + 3].issueNumber} </span>
                          <span>
                            {" "}
                            Price : {comics[index + 3].prices[0]["price"]}$
                          </span>
                        </div>
                      </div>
                    ) : null}
                    {comics[index + 4] !== undefined ? (
                      <div style={styles.itemDiv}>
                        <img
                          style={styles.item}
                          src={
                            comics[index + 4].thumbnail["path"] +
                            "/portrait_incredible." +
                            comic.thumbnail["extension"]
                          }
                          alt="Marvel Comic"
                        />
                        <div style={styles.info}>  
                          <span style={styles.title}> {comics[index + 4].title} </span>
                          <span> Issue : {comics[index + 4].issueNumber} </span>
                          <span>
                            {" "}
                            Price : {comics[index + 4].prices[0]["price"]}$
                          </span>
                        </div>
                      </div>
                    ) : null}
                  </div>
                </div>
              );
                        }
          )
        : null}
    </div>
  );
};

export default HomePage;
