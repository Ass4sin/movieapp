import React, { Component } from 'react'
import { moviePoster } from './appdata/movies';

const AppContext = React.createContext();

export class AppProvider extends Component {
    constructor(props) {
        super(props)

        this.state = {
            activeMenuTab: 0,
            favoriteMovies: [],
            moviePosters: [],
            isMovieViewActive: false,
        }

        this.posters = moviePoster;
    }

    toggleMovieView = (value) => {
        this.setState({isMovieViewActive: !this.state.isMovieViewActive})
    }

    componentDidMount() {
        this.posters.map((element, index) => {
            element.isLiked = false
        })

        this.setState({moviePosters: this.posters})
    }

    setActiveMenuTab = (index) => {
        this.setState({activeMenuTab: index})
    }

    addFavoriteMovie = (movie) => {
        this.setState({favoriteMovies: [...this.state.favoriteMovies, movie]})
    }

    removeFavoriteMovie = (movie) => {
        this.setState({favoriteMovies: this.state.favoriteMovies.filter(item => movie !== item)})
    }

    addFavoriteMovieByIndex = (index) => {
        this.posters[index].isLiked = true;
        this.setState({moviePosters: this.posters})
    }

    removeFavoriteMovieByIndex = (index) => {
        this.posters[index].isLiked = false;
        this.setState({moviePosters: this.posters})
    }

    render() {
        return (
            <AppContext.Provider value={{
                ...this.state,
                ...this
            }}>
                {this.props.children}
            </AppContext.Provider>
        )
    }
}

export default AppContext;