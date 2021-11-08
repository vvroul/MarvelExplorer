import { useEffect, useState } from "react";

const useLoadComics = (pageNumber) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [comics, setComics] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);
    let md5 = require("md5");
    let keyComb =
      "19c3414fb83f3b7242c9b264359c0ebcf788efe7bd56d6d10d8f49278e403ae7884dbae86";
    let hash = md5(keyComb);
    fetch(
      `http://gateway.marvel.com/v1/public/comics?ts=1&format=comic&formatType=comic&offset=${pageNumber}&apikey=d56d6d10d8f49278e403ae7884dbae86&hash=${hash}`
    )
      .then((res) => res.json())
      .then((data) => {
        setComics(data.data.results);
        setHasMore(data.data.results.lenght > 0);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setError(true);
      });
  }, [pageNumber]);
  return { comics, loading, error, hasMore };
};

export default useLoadComics;
