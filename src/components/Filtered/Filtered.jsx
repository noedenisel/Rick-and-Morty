import {  useDispatch } from 'react-redux';
import React, { useState } from "react";
import {  orderCards } from "../../redux/actions/actions";

import styles from "./Filtered.module.css"

export default function Filtered() {

    const [order, setOrder] = useState('')

    const dispatch = useDispatch() 

    function handleOrderCards(event){
        dispatch(orderCards(event.target.value))
        setOrder(`Ordered ${event.target.value}`)
      }

  return (
    <div>
        <div className={styles.filterContent}>
    <div>
       <div className={styles.filterTitle}>Ordenar por nombre: </div>
        <div className={styles.customSelect}>
            <select name= "order" id= "" onChange={(event) => handleOrderCards(event)} > 
                <option value = "" >Select...</option>
                <option value="All">All</option>
                <option value = "Ascendente">Ascendente</option>
                <option value = "Descendente"> Descendente</option>
            </select>
        </div>
    </div>
    {/* <div>
     <div className={style.filterTitle}>Filtrar por genero: </div>
        <div className={style.customSelect}>
            
            <select name = "Género" id= ""  >  
                <option value = "">Select...</option>
                <option value="Characters">All</option> 
                <option value="Male">Masculino</option> 
                <option value="Female">Femenino</option> 
                <option value="Genderless">Genderless</option> 
                <option value="Unknown">Unknown</option> 
               
            </select> 
        </div>
    </div> */}
  </div>
    
</div>
  )
}
