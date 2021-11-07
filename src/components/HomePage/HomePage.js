import React, { useEffect, useState } from "react";
import Welcome from "../Welcome/Welcome.js";
import ComicsContainer from "../ComicsContainer/ComicsContainer.js";

const HomePage = () => {
  const [comics, setComics] = useState([]);

  useEffect(() => {
    let md5 = require("md5");
    let keyComb =
      "19c3414fb83f3b7242c9b264359c0ebcf788efe7bd56d6d10d8f49278e403ae7884dbae86";
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
      <Welcome />
      {comics !== []
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
    </div>
  );
};

export default HomePage;
