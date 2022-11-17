import React from 'react'
import styles from './SearchBar.module.css'

export default function SearchBar(props) {
   return (
      <div>
          <input type='search' />
      <button onClick={props.onSearch} className={styles.buttonAgregar}>Agregar</button> 
      </div>
   );
}
