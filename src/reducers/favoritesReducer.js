import {
	ADD_FAVORITES,
	TOGGLE_FAVORITES,
	REMOVE_FAVORITE,
} from "../actions/movieActions";

const initialState = {
	favorites: [],
	displayFavorites: true,
};

export const favoritesReducer = (state = initialState, action) => {
	switch (action.type) {
		case TOGGLE_FAVORITES:
			return {
				...state,
				displayFavorites: !state.favorites,

				// ...state,
				// displayFavorites: state.favorites.map((item) => {
				// 	if (item.id === action.payload) {
				// 		return {
				// 			...state,
				// 			favorites: !state.favorites,
				// 		};
				// 	}
				// }),
			};
		case ADD_FAVORITES:
			return {
				...state,
				favorites: [...state.favorites, action.payload],
			};
		case REMOVE_FAVORITE:
			return {
				...state,
				favorites: state.favorites.filter((item) => item !== action.payload),
			};
		default:
			return state;
	}
};
