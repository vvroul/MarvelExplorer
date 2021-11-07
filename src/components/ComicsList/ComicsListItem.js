import React from 'react'

const styles = { 
    div : {
        display : 'flex',
        flex : 1,
        flexDirection : 'row',
        alignItems : 'left',
        justifyContent : 'left',
        marginTop : "20px",
        cursor : "pointer",
        backgroundColor : "purple"
    },
}

const NavbarItem = ({comic}) => {
    return (
        <div style={styles.div} >
            <img src={comic.thumbnail['path'] + "/portrait_fantastic." + comic.thumbnail['extension']} alt="Marvel Comic" />
        </div> 
    )
}

export default NavbarItem
