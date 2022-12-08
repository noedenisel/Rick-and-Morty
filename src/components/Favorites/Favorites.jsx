
import { connect } from "react-redux"

import  Card  from "../Card/Card";




export function Favorites({myFavorites, onClose}){



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
        </div>
    )
}

export function mapStateToProps(state) {
    return {
       myFavorites : state.myFavorites

    }
}

export default connect (mapStateToProps)(Favorites)
 