import React, { Fragment, useContext } from 'react'
import styles from "./ToggleButton.module.scss"
import AppContext from '../../../AppContext'

const ToggleButton = (props) => {
    const context = useContext(AppContext)

    return (
        <Fragment>
            <label className={styles.switch}>
                {
                    context.isMovieViewActive ?
                        < input type="checkbox" checked /> :
                        < input type="checkbox" />
                }
                <span className={styles.sliderRound}></span>
            </label>
        </Fragment>
    )

}

export default ToggleButton