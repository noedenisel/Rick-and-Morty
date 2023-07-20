//React
import { React, useState, useEffect} from 'react'
import {Link} from "react-router-dom"
import { addFavorites, deleteFavorites } from '../../redux/actions/actions';
import { connect } from 'react-redux';
//Styles
import styles from './Card.module.css'

export function Card(props) {

   const [isFav, setIsFav] = useState(false);

   useEffect(() => {
      props.myFavorites.forEach((favorite) => {
         if (favorite.id === props.id) {
            setIsFav(true);
         };
      });
   }, [props.myFavorites,props.id]);


   function handleFavorite () {
      if( isFav ){
         setIsFav(false);
         props.deleteFavorites(props.id)
      } else  {
         setIsFav(true);
         props.addFavorites(props)
      }
   }


   return (

   <div className={styles.card}>   
         <div>
            <button onClick={props.onClose} className={styles.button}>X</button>  
               { 
                  isFav ? ( <button className={styles.button} onClick={handleFavorite}> ❤️ </button> ) 
                  : ( <button className={styles.button} onClick={handleFavorite}> 🤍 </button> )
               }
         </div>
         
         <br></br>
         <br></br>
         
         <div className={styles.tittle}>
            <Link to = {`/detail/${props.id}`} className= {styles.link} >
               <h2 >
                  <span  >{props.name}</span>
               </h2>   
            </Link>
         </div>

         <div className={styles.info}> 
            <div className={styles.infoExtra}>
               <h2 className={styles.infoExtra}>{props.species}</h2>
               <h2 className={styles.infoExtra}>{props.gender}</h2> 
            </div>
      
            <div >
               <img className={styles.imgCharacter} src={props.image} alt="" />
            </div>      
         </div> 
   </div>
   );
}

export function mapDispatchToProps(dispatch){
   return {
      addFavorites: function(character){
         dispatch(addFavorites(character))
      },  
      
      deteleFavorite: function(id){
         dispatch(deleteFavorites(id))
      }
   }
}

export function mapStateToProps(state) {
      return {
         myFavorites : state.myFavorites
      }
}

export default connect (mapStateToProps, mapDispatchToProps)(Card)
