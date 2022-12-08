import { ADD_FAVORITES , DELETE_FAVORITES} from "../actions/types"

const initialState = {
    myFavorites : [],
}

export default function favorites  (state = initialState, action)  {

    switch (action.type) {

        case ADD_FAVORITES:
            return{
                ...state,
                myFavorites: [...state.myFavorites, action.payload]
            }

        case DELETE_FAVORITES:
            const filtered = state.myFavorites.filter( favorite => favorite.id !== action.payload)
            return {
                ...state,
                myFavorites: filtered
            }
        
            default:
                return {...state}
    }
}

