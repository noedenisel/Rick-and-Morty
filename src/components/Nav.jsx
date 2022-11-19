import React from 'react'
import SearchBar from './SearchBar'
import styles from './SearchBar.module.css'

export default function NavBar(props) {
    return(
<nav className={styles.nav}>

        <SearchBar onSearch={props.onSearch} //=> window.alert(characterID)
        />

</nav>
    )

 }