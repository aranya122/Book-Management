
import "./style.css"
function Book(props){
    return(
    <div className="book-card">
        
        <img src= {props.bookDetails.coverImages} 
        alt="" 
        width="200px" 
        height="200px"
        className="book-cover"
        />
        <div className="book-details">
            <h2 className="book-title">{props.bookDetails.title}</h2>
            <p className="book-description">{props.bookDetails.description}</p>
            
        </div>
    </div>
    
    )
}
export default Book;