import React, {useState} from 'react'
import styles from './SearchBar.module.css'


export default function SearchBar({onSearch}) {
   const [searchCharacter, setSearchCharacter] = useState("")
   const changeHandler = (event) => {
      setSearchCharacter(event.target.value)
   }

   return (
      <div >
         <input type='text' name="search" className={styles.imput} placeholder="inserta personajeID " onChange={changeHandler}/>
         <button onClick={()=> onSearch(searchCharacter)} className={styles.buttonAgregar}>Agregar</button> 
         <button onClick={()=> onSearch(Math.floor(Math.random()*826))} className={styles.buttonAgregar}>Personaje Random</button> 
      </div>
   );

   }