import { ADD_FAVORITES , DELETE_FAVORITES, FILTER, ORDER} from "../actions/types"

const initialState = {
    myFavorites : [],
    allCharacters: [],
}

export default function favorites  (state = initialState, action)  {

    switch (action.type) {

        case ADD_FAVORITES:
            return{
                allCharacters: [...state.allCharacters, action.payload],
                myFavorites: [...state.myFavorites, action.payload]
            }

            case DELETE_FAVORITES:
                return {
                  ...state,
                  myFavorites: state.myFavorites.filter((favorite) => favorite.id !== action.payload),
                };

        case FILTER:
            const filteredCharacters = state.allCharacters.filter(character => 
                character.gender === action.payload);
                return {
                    ...state,
                    myFavorites: filteredCharacters
                }

        case ORDER:
            const sortedCharacters  = state.allCharacters
                if (action.payload === "Ascendente") {
                    sortedCharacters.sort((a,b) => a.id - b.id)
                } else if (action.payload === "Descendente"){
                    sortedCharacters.sort((a,b) => b.id - a.id)
           } 
           return {
            ...state,
            myFavorites: sortedCharacters,

           }

            default:
                return {...state}
    }
}

