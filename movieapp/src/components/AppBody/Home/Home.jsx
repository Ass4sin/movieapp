import React, { Component, Fragment } from 'react'
import { movieList } from '../../../appdata/movies'
import MovieCards from './MovieCards/MovieCards'
import styles from './Home.module.scss'
import AppContext from '../../../AppContext';
import FavoriteMovieList from '../FavoriteMovieList/FavoriteMovieList';

export default class Home extends Component {
    static contextType = AppContext;

    render() {
        return (
            <Fragment>
                <FavoriteMovieList/>

                {/* <div className={styles.cardContainer}>
                    {
                        this.context.moviePosters.map((movie, index) =>
                            <div>{movie.title}</div>
                        )
                    }
                </div> */}

                <div className={styles.cardContainer}>
                    {
                        movieList.map((element, index) =>
                            <MovieCards
                                key={index}
                                trailerUrl={element.trailerUrl}
                                description={element.description} />
                        )
                    }
                </div>

            </Fragment>


        )
    }
}
