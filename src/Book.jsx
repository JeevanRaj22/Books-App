function Book({book:{title,author,genre}}){
    return(
        <div className="book">
                    <div className="title"><b>Title</b>: {title}</div>
                    <div className="author"><b>Author</b>: {author}</div>
                    <div className="genre"><b>Genre</b>: {genre}</div>
                </div>
    );
}

export default Book;