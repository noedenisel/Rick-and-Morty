import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"
import styles from './Detail.module.css'



export default function Detail(props) {
   const { id } = useParams ();
   const [ character, setCharacter] = useState({
      name: "",
      status: "",
      species: "",
      gender: "",
      origin: {},
      image: "",
   })
   const navigate = useNavigate();

useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
       .then((response) => response.json())
       .then((char) => {
          if (char.name) {
             setCharacter(char);
          } else {
             window.alert('No hay personajes con ese ID');
          }
       })
       return setCharacter({});
 }, [id]);


 return (  
   <div>
     
      <div className={styles.card}>
         <div className={styles.tittle}>
            <h1 > {character.name }</h1>
         </div>
         
         <div className={styles.info}> 
            <div className={styles.infoExtra}>
               <h2 className={styles.infoExtra}> Status: {character.status }</h2>
               <h2 className={styles.infoExtra}> Specie: {character.species }</h2>
               <h2 className={styles.infoExtra}> Gender: {character.gender }</h2>
         </div>
      

            <div>
               <img src={character.image} alt="character img"></img>
            </div>
         </div>

 
      </div>

      <div className={styles.buttonBack}>
         <button className={styles.links} onClick={()=> navigate("/home")}>Regresar a la página principal</button>
      </div>
   </div>
 ) 
}


