import React, { useState} from "react";
import { connect , useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Card from '../Card/Card';
import { deleteFavorites, orderCards } from '../../redux/actions/actions';

import styles from '../Detail/Detail.module.css';
import style from "./Fav.module.css";

export function Favorites({ myFavorites, deleteFavorites, filtrarPersonajes }) {
  const navigate = useNavigate();
  const dispatch = useDispatch() 

  const [order, setOrder] = useState('')
  
  function handleCardClose(id) {
    // Eliminar el personaje de la lista de favoritos utilizando la acción deleteFavorites
    deleteFavorites(id);
    console.log("Elimine favorito:", deleteFavorites(id));
  }

  function handleOrderCards(event){
    dispatch(orderCards(event.target.value))
    setOrder(`Ordered ${event.target.value}`)
  }


  return (
    <div>
      <div className={style.filterContent}>
        <div>
           <div className={style.filterTitle}>Ordenar por nombre: </div>
            <div className={style.customSelect}>
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
    
      {myFavorites.map((character) => (
        <Card
          key={character.id}
          name={character.name}
          species={character.species}
          gender={character.gender}
          image={character.image}
          id={character.id}
          onClose={() => handleCardClose(character.id)} />
      ))}
     <div className={styles.buttonBack}>
        <button className={styles.links} onClick={() => navigate('/home')}>
          Regresar a la página principal
        </button>
      </div>
    </div>
  );
}


function mapStateToProps(state) {
  return {
    myFavorites: state.myFavorites,
  };
}

const mapDispatchToProps = {
  deleteFavorites,
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
