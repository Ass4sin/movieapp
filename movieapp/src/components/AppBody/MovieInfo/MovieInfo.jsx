import React, { Fragment, useContext, useState } from 'react'
import AppContext from '../../../AppContext'
import styles from './MovieInfo.module.scss'
import PosterOverlay from '../PosterOverlay/PosterOverlay'
import MovieDetailsColumn from '../MovieDetailsColumn/MovieDetailsColumn'

const MovieInfo = (props) => {
    const context = useContext(AppContext)

    const [isHoverOn, setIsHoverOn] = useState(false);
    const [hoverIndex, sethoverIndex] = useState(0);

    function posterHover(index){
        setIsHoverOn(true);
        sethoverIndex(index);
    }

    function posterHoverOff() {
        setIsHoverOn(false);
    }

    return (
        <Fragment>
            {context.isMovieViewActive ?
                <MovieDetailsColumn movie={props.element}/> :

                <div className={styles.posterOverlay} onMouseEnter={() => { posterHover(props.index) }} onMouseLeave={posterHoverOff}>
                    <PosterOverlay
                        title={props.element.title}
                        isHoverOn={isHoverOn}
                        index={props.index}
                        hoverIndex={hoverIndex}
                        movie={props.element} />
                </div>
            }
        </Fragment>
    )
}

export default MovieInfo