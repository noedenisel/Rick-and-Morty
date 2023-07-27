import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addFavorites, deleteFavorites } from '../../redux/actions/actions';

import styles from './Card.module.css';

function Card(props) {
  
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    // ? Verificar si el personaje ya está en la lista de favoritos al cargar el componente
    setIsFav(props.myFavorites.some((favorite) => favorite.id === props.id));
  }, []); 
  
  function handleFavorite() {
    if (isFav) {
      setIsFav(false);
      props.deleteFavorites(props.id); //? Eliminar el personaje de la lista de favoritos
    } else {
      setIsFav(true);
      const { id, name, species, gender, image } = props;
      props.addFavorites({ id, name, species, gender, image }); //? Agregar el personaje a la lista de favoritos
    }
  }
  


  return (
    <div className={styles.card}>
      <div>
        <button onClick={props.onClose} className={styles.button}>X</button>
        {isFav ? (
          <button className={styles.button} onClick={handleFavorite}>{' '}❤️{' '}</button>
        ) : (
          <button className={styles.button} onClick={handleFavorite}>{' '}🤍{' '}</button>
        )}
      </div>

      <br />
      <br />

      <div className={styles.tittle}>
        <Link to={`/detail/${props.id}`} className={styles.link}>
          <h2>
            <span>{props.name}</span>
          </h2>
        </Link>
      </div>

      <div className={styles.info}>
        <div className={styles.infoExtra}>
          <h2 className={styles.infoExtra}>{props.species}</h2>
          <h2 className={styles.infoExtra}>{props.gender}</h2>
        </div>

        <div>
          <img  src={props.image} alt="" />
        </div>
      </div>
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    addFavorites: function (character) {
      dispatch(addFavorites(character));
    },
 
    deleteFavorites: function (id) {
      dispatch(deleteFavorites(id));
    },
  };
}
 
function mapStateToProps(state) {
  return {
    myFavorites: state.myFavorites,
  };
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Card);

 