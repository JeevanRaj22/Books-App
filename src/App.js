import React from "react";
import "./App.css";

import Book from "./Book";

let booklist=[
    {
        title: "1984",
        author: "George Orwell",
        genre: "futuristic"
    },
    {
        title: "The Lord of the Rings",
        author: "J.R.R. Tolkien",
        genre: "fantasy"
    },
    {
        title: "The Kite Runner",
        author: "Khaled Hosseini",
        genre: "novel"
    },
    {
        title: "Harry Potter and the Philosopher’s Stone",
        author: "J.K. Rowling",
        genre: "fantasy"
    },
    {
        title: "Slaughterhouse-Five",
        author: "Kurt Vonnegut",
        genre: "anti-war"
    },
    {
        title: "The Lion, the Witch, and the Wardrobe",
        author: "C.S. Lewis",
        genre: "fantasy"
    },
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        genre: "novel"
    },
    {
        title: "The Book Thief",
        author: "The Book Thief",
        genre: "Novel"
    },
    {
        title: "Wuthering Heights",
        author: "Wuthering Heights",
        genre: "classic "
    },
    {
        title: "The Catcher in the Rye ",
        author: "J.D. Salinger",
        genre: "coming-of-age"
    }
];
function App(){
    return(
        <div className="App">
            <h1>Books App</h1>
            <div className="container">
                {booklist.map(item=>(<Book book={item} />))}
            </div>
        </div>
    );
}

export default App;