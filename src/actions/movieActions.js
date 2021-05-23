export const DELETE_MOVIE = "DELETE_MOVIE";
export const ADD_MOVIE = "ADD_MOVIE";
export const ADD_FAVORITES = "ADD_FAVORITES";
export const TOGGLE_FAVORITES = "TOGGLE_FAVORITES";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";

export const deleteMovie = (id) => {
	return { type: DELETE_MOVIE, payload: id };
};

// action creator for adding movie
export const addMovie = (movie) => {
	return { type: ADD_MOVIE, payload: movie };
};

//toggling favorites
export const toggleFavorites = () => {
	return { type: TOGGLE_FAVORITES };
};

//action creator for adding favorite
export const addFavorites = (id) => {
	return { type: ADD_FAVORITES, payload: id };
};

//removing favorite:
export const removeFavorite = (id) => {
	return {
		type: REMOVE_FAVORITE,
		payload: id,
	};
};
