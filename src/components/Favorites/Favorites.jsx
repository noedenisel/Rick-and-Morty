import React, { useEffect } from "react";
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Card from '../Card/Card';
import { deleteFavorites } from '../../redux/actions/actions';

import styles from '../Detail/Detail.module.css';

export function Favorites({ myFavorites, deleteFavorites }) {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Log para reflejar el estado de myFavorites
    console.log("Current myFavorites state:", myFavorites);
  }, [myFavorites]);

  function handleCardClose(id) {
    // Eliminar el personaje de la lista de favoritos utilizando la acción deleteFavorites
    deleteFavorites(id);
    console.log("Elimine favorito:", deleteFavorites(id));
  }

  return (
    <div>
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
