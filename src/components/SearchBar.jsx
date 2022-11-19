import React from 'react'
import styles from './SearchBar.module.css'

export default function SearchBar(props) {
   return (
      <div className={styles.searchBar}>
          <input type='search' className={styles.imput}/>
      <button onClick={props.onSearch} className={styles.buttonAgregar}>Agregar</button> 
      </div>
   );
}
