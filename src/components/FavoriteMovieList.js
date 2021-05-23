import React from "react";

import { Link } from "react-router-dom";

import { connect } from "react-redux";

// -----
import { removeFavorite } from "../actions/movieActions";

const FavoriteMovieList = (props) => {
	// const favorites = [];
	//
	// const handleRemove = (e) => {
	// 	removeFavorite(props.favorites.favorites.id);
	// };

	return (
		<div className="col-xs savedContainer">
			<h5>Favorite Movies</h5>
			{props.favorites.favorites.map((movie) => {
				return (
					<div key={movie.id}>
						<Link
							className="btn btn-light savedButton"
							to={`/movies/${movie.id}`}
						>
							{movie.title}
							<span>
								<span
									type="button"
									class="material-icons"
									onClick={(e) => {
										e.preventDefault();
										removeFavorite(movie.id);
									}}
								>
									remove_circle
								</span>
							</span>
						</Link>
					</div>
				);
			})}
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		favorites: state.favorites,
		displayFavorites: state.displayFavorites,
	};
};

export default connect(mapStateToProps, { removeFavorite })(FavoriteMovieList);
