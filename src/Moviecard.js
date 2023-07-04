import { Component } from "react";

class Moviecard extends Component{

    constructor(){
        super();
        this.state = {
            title : "Iron Man 1",
            plot : "Super natural power shown in movie",
            price : 199,
            rating : 0,
            fav : false,
            addToCart : false
        }
       

    }

    


    
    render(){
        const {movie, addStar, handleCart, handleFav} = this.props;
        const {title, plot, price, rating, star, fav, addToCart} = this.props.movie;
        console.log(this.props.movie);
        return(
            <div className="main">
                <div className="movie-card">
                    <div className="left">
                        <img alt="poster" src = "https://cdn.pixabay.com/photo/2021/07/20/14/59/iron-man-6480952_1280.jpg" />
                    </div>
                    <div className="right">
                        <div className="title">{title}</div>
                        <div className="plot">{plot}</div>
                        <div className="price">{price}</div>

                        <div className="footer">
                            <div className="rating">{rating}</div>
                            <div className="star-dis">
                                <img alt="decrease" src="https://cdn-icons-png.flaticon.com/128/56/56889.png" className="star-btn"/>
                                <img alt="star" src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" className="stars"/>
                                <img alt="increase" src="https://cdn-icons-png.flaticon.com/128/1828/1828925.png" className="star-btn"
                                onClick={() => {addStar(movie)}}/>
                                <span> &nbsp;{star}</span>
                            </div>
                            <button className={fav?"unfavourite-btn":"favourite-btn"} onClick={()=>{handleFav(movie)}}>
                            {fav?"Un-Favourite":"Favourite"}</button>
                            <button className={addToCart?"remove-btn":"cart-btn"} onClick={()=>{handleCart(movie)}}>
                            {addToCart?"Remove":"Add To Cart"}</button>
                            <button></button>
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Moviecard;