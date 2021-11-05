import React from 'react'

const styles = { 
    div : {
        display : 'flex',
        position : 'absolute',
        flex : 1,
        width : '100%',
        height: '35vh', 
        justifyContent : 'center',
        alignItems : 'center',
        flexDirection : 'column',
        
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
    cube : { 
        paddingTop : '100px',
    }
}

const HomePage = () => {
    return (
        <div style={styles.div} id="Home">
            <h1 style={styles.h1}> Welcome to the Marvel Explorer! </h1>
            <h2 style={styles.h2}> Below you can find a list of all the new Marvel comics releases. </h2>
            <h2 style={styles.h2}> Do you have an all time favorite? Our catalog probably has it too! </h2>
        </div>
    )
}

export default HomePage;
