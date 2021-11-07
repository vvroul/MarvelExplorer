import React from 'react'
import ComicsListItem from './ComicsListItem'

const styles = { 
    div : {
        display : 'flex',
        backgroundColor : "yellow"
    }
}

const NavbarList = ({comic}) => {
    return (
        <div style={styles.div}>
            <ComicsListItem comic={comic}/>
        </div>
    )
}

export default NavbarList
