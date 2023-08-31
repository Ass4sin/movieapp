import React, { Component } from 'react'
import { heartOutlineIcon, heartSolidIcon } from '../../appdata/icons';
import styles from "./Heart.module.scss";
import AppContext from '../../AppContext';

export default class Heart extends Component {
  static contextType = AppContext;

  constructor(props) {
    super(props)

    this.state = {
      heartImage: heartOutlineIcon
    }
  }

  componentDidMount() {
    this.context.moviePosters[this.props.index].isLiked === true ?
      this.setState({
        heartImage: heartSolidIcon
      }) :
      this.setState({
        heartImage: heartOutlineIcon
      })
  }

  changeHeartState = () => {
    if (this.state.heartImage === heartOutlineIcon) {
      this.setState({
        heartImage: heartSolidIcon
      })

      this.context.addFavoriteMovie(this.props.movie);
      this.context.addFavoriteMovieByIndex(this.props.index);
    }
    else {
      this.setState({
        heartImage: heartOutlineIcon
      })

      this.context.removeFavoriteMovie(this.props.movie);
      this.context.removeFavoriteMovieByIndex(this.props.index);
    }
  }

  render() {
    return (
      <img src={this.state.heartImage} className={styles.heart} onClick={this.changeHeartState}></img>
    )
  }
}
