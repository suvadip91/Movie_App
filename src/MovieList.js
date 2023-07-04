import { Component } from "react";
import Moviecard from "./Moviecard";

class MovieList extends Component{

    constructor(){
        super();
        this.state = {
            movies : [
                {

                    title : "Iron Man",
                    plot : "Super natural power shown in movie",
                    price : 199,
                    rating : 0,
                    star : 0,
                    fav : false,
                    addToCart : false
                },
                {

                    title : "The Dark Knight",
                    plot : "Super natural power shown in movie",
                    price : 199,
                    rating : 0,
                    star : 0,
                    fav : false,
                    addToCart : false
                },
                {

                    title : "Anaconda",
                    plot : "Super natural power shown in movie",
                    price : 199,
                    rating : 0,
                    star : 0,
                    fav : false,
                    addToCart : false
                }
            ]
        }
    }

    handleFav = (movie) =>{
        const {movies} = this.state;
        const mid = movies.indexOf(movie);
        movies[mid].fav = !movies[mid].fav;
        this.setState ({
            movies
        })
    }

    handleCart = (movie) =>{
        const {movies} = this.state;
        const mid = movies.indexOf(movie);
        movies[mid].addToCart = !movies[mid].addToCart;
        this.setState ({
            movies
        })
    }

    addStar = (movie) =>{
        console.log(movie);
        const {movies} = this.state;
        const mid = movies.indexOf(movie);
        console.log(mid);

        if(movies[mid].star>=5){
            return;
        }
        movies[mid].star += 0.5;

        this.setState ({
            movies : movies
        })
    }

    render(){
        //const {title, plot, price, rating, fav, addToCart} = this.state.movies;
        const {movies} = this.state;
        // console.log("movies are:");
        // console.log(this.state.movies);
        return(
            <>
                {movies.map((movie) => <Moviecard movie = {movie} addStar = {this.addStar}
                     handleFav = {this.handleFav} handleCart = {this.handleCart}/>)}
            </>
        )
    }
}

export default MovieList;