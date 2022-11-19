import React from 'react'
import SearchBar from './SearchBar'
import styles from './SearchBar.module.css'

export default function NavBar(props) {
    return(
<nav className={styles.nav}>

        <SearchBar onSearch={(characterID) => window.alert(characterID)}
        />

</nav>
    )

 }