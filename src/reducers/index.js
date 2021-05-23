import { combineReducers } from "redux";

import movieReducer from "./movieReducer";

// ---importing the favorites reducer:
import { favoritesReducer } from "./favoritesReducer";

// export default movieReducer;

export default combineReducers({
	movies: movieReducer,
	favorites: favoritesReducer,
	// appTitle: "IMDB Movie Database",
});
