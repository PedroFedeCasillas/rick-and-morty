import { ADD_FAVORITE, REMOVE_FAVORITE, FILTER, ORDER} from "./actions";


const initialState = {
    myFavorites: [],
    allCharacters: []
};

const rootReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_FAVORITE:
            return {
                ...state, 
                myFavorites: [...state.myFavorites, action.payload],
                allCharacters: [...state.allCharacters, action.payload]
            };

        case REMOVE_FAVORITE:
            return {
                ...state, 
                myFavorites: state.myFavorites.filter((char) => char.id !== action.payload),
                allCharacters: state.allCharacters.filter((char) => char.id !== action.payload)
            };

        case FILTER:
            return {
                ...state,
                myFavorites: state.allCharacters.filter((char) => char.gender === action.payload)
            };
        case ORDER:
                let sortedChars = [...state.allCharacters];
                if (action.payload === 'Ascendente') {
                sortedChars.sort((a, b) => a.id - b.id);
                } else if (action.payload === 'Descendente') {
                sortedChars.sort((a, b) => b.id - a.id);
            }
            return {
                ...state,
                myFavorites: sortedChars
            };

        default:
            return {...state};
    }
};

export default rootReducer;