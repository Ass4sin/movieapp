import React, { Component, Fragment } from 'react'
import styles from "./PosterOverlay.module.scss"
import Heart from '../../Heart/Heart'

export default class PosterOverlay extends Component {

    getOverlayStyle = () => {
        if (this.props.isHoverOn && this.props.index === this.props.hoverIndex)
            return styles.posterOverlayContainer;
        return styles.hideOverlay;
    }

    render() {
        return (
            <div className={this.getOverlayStyle()} >
                <div className={styles.movieTitle}>{this.props.title}</div>
                <Heart movie={this.props.movie} index={this.props.index}/>
            </div>
        )
    }
}
