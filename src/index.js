import React from 'react';
import ReactDom from 'react-dom';
import "./index.css";

function Books() {
    return ( <section className="books" >
            <Book />
            <Book />
            <Book />
            <Book />
            <Book />
            <Book />
            <Book />
            <Book />
        </section>
    );
}
const Book = () =>{
    return ( 
        <article className="book" >
            <CoverImage />
            <Title /> 
            <Author />
        </article>
    );
}

const CoverImage = () => <img width="200" src="https://images-na.ssl-images-amazon.com/images/I/71uutVsAYxL._AC_UL480_SR318,480_.jpg" alt="donald trump" />

const Title = () => <h1>The Plot Against The President</h1>

const Author = () => <p style={authorStyle}>by LEE SMITH</p>

const authorStyle = {
    letterSpacing:"10px",
    color:"green"
};



ReactDom.render( <Books/>, document.getElementById("root"));