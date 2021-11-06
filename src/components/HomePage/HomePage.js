import React, {useEffect, useState} from 'react'

const styles = { 
    div : {
        display : 'flex',
        position : 'absolute',
        flex : 1,
        width : '100%',
        justifyContent : 'center',
        alignItems : 'center',
        flexDirection : 'column',
        paddingTop : '40px',
        
    },
    h1 : { 
        color : 'white',
        fontSize: '30px',
        width : '100%',
        height: '10vh', 
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : "#202020",
        fontFamily : "SyneMono-Regular",

    },
    h2 : { 
        color : 'white',
        paddingTop : '20px',
        fontFamily : "SyneMono-Regular",
    },
    // comics : { 
    //     display : 'flex',
    //     width : '30%',
    //     justifyContent : 'left',
    //     alignItems : 'left',
    //     flexDirection : 'row',
    //     paddingTop : '40px',
    // }
}

const HomePage = () => {
    const [comics, setComics] = useState([]);

    useEffect(() => {
        fetch("http://gateway.marvel.com/v1/public/comics?ts=1&format=comic&formatType=comic&apikey=d56d6d10d8f49278e403ae7884dbae86")
        .then((res) => res.json())
        .then(data => { 
            console.log(data.data.results);
            setComics(data.data.results);
        })
        .catch(error => console.log(error));
    }, [])

    return (
        <div style={styles.div} id="Home">
            <h1 style={styles.h1}> Welcome to the Marvel Explorer! </h1>
            <h2 style={styles.h2}> Below you can find a list of all the new Marvel comics releases. </h2>
            <h2 style={styles.h2}> Do you have an all time favorite? Our catalog probably has it too! </h2>
            {comics !== [] ? comics.map(comic => (
            <div key={comic.id} style={styles.comics}>
              <h3> Title : {comic.title} </h3>
              <h3> Issue Number : {comic.issueNumber} </h3>
              <img src={comic.thumbnail['path'] + "/portrait_fantastic." + comic.thumbnail['extension']} alt="Marvel Comic" />
            </div>
            )) : null}
        </div>
    )
}

export default HomePage;
