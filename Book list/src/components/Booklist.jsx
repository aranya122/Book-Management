import Book from "./Book";
import "./style.css"
function Booklist(props) {
      

      return(
            <div className="booklist">
            {props.booksData.map((data)=> (
                      <Book key={data.id}bookDetails={data}></Book>
                  ))}
             </div>
      );
      
}
export default Booklist;