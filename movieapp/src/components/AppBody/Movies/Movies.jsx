import React, { Component, Fragment } from 'react'
import MovieContainer from '../MovieContainer/MovieContainer'
import MovieToolBar from '../MovieToolBar/MovieToolBar'

export default class Movies extends Component {


  render() {
    return (
      <Fragment>
        <MovieToolBar/>
        <MovieContainer/>
      </Fragment>

    )
  }
}

