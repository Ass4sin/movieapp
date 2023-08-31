import React, { useContext } from 'react'
import styles from "./MovieViewToggle.module.scss"
import ToggleButton from '../ToggleButton/ToggleButton'
import AppContext from '../../../AppContext'

const MovieViewToggle = () => {
    const context = useContext(AppContext)

    function changeToggle(e) {
        e.preventDefault();
        context.toggleMovieView()
    }

    return (
        <div className={styles.viewToggle}>
            <div>Toggle View</div>
            <div className={styles.toggleWrapper} onClick={changeToggle}>
                <ToggleButton isActive={context.isMovieViewActive} />
            </div>
        </div>
    )
}

export default MovieViewToggle
