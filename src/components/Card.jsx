import React from 'react'
import styles from './Card.module.css'

export default function Card(props) {
   return (
      
         <div className={styles.cards}>
            <button onClick={props.onClose} className={styles.button}>X</button> 
               <div>
               <h2>
                  <span className={styles.tittle}>{props.name}
                  </span>
                  </h2>    
               </div>   
               
               <div  >
                  <img  src={props.image} alt=""className={styles.imgCharacter} />
               </div>   

               <div className={styles.infoExtra}>
                  <h2>{props.species}</h2>
                  <h2>{props.gender}</h2> 
               </div>
          
         </div>
   );
}
