import React, { useContext } from 'react'
import AppContext from '../../../AppContext'
import styles from './FavoriteMovieList.module.scss'

const FavoriteMovieList = () => {
    const context = useContext(AppContext)

    return <div className={styles.favoriteList}>
        {
            context.moviePosters.map((movie, index) =>
                movie.isLiked &&
                    <div className={styles.favoriteMovieCard}>
                        <img style={{ backgroundImage: "url(" + movie.posterUrl + ")" }} className={styles.posterImage}></img>
                        <div className={styles.movieTitle}>{movie.title}</div>
                    </div>
            )
        }
    </div>

}

export default FavoriteMovieList