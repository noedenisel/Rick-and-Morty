
import { connect } from "react-redux"
import { useNavigate } from "react-router-dom"

import  Card  from "../Card/Card";

import styles from "../Detail/Detail.module.css"


export function Favorites({myFavorites, onClose}){

    const navigate = useNavigate();

    return (
        <div>
            {myFavorites.map(character => (
                <Card
                id = {character.id}
                name={character.name} 
                species={character.species} 
                gender={character.gender} 
                image={character.image} 
                onClose= {() => onClose(character.id)}
                >
                </Card>
            ))
            }
        
            <div className={styles.buttonBack}>
                <button className={styles.links} onClick={()=> navigate("/home")}>Regresar a la página principal</button>
            </div>
        </div>

    )
}

export function mapStateToProps(state) {
    return {
       myFavorites : state.myFavorites

    }
}

export default connect (mapStateToProps)(Favorites)
 
