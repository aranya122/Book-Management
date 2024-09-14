/** 
 * 
 * Booklist component
 * Book component
 * 
 * 
 */

import Booklist from "./components/Booklist";
import { Books } from "./utils/mockdata";
import "./components/style.css";
import { useState } from "react";

function App() {

  const [searchText, setSearchText] = useState("");
  const [filteredBooks, setFilteredBooks] = useState(Books);
  function handleSearch () {
    console.log("search Text", searchText);
     const filterBooks = Books.filter((book) => 
      book.title.toLowerCase().includes(searchText.toLowerCase())
    );
    console.log("filtered books", filteredBooks);

    setFilteredBooks(filterBooks);



  }
  return (
    <>
      <div className="search">
        <h2>Search Box</h2>
        <div>
          <input type="text"
          className="search-input" 
          onChange={(e) =>setSearchText(e.target.value)} 
          />
          <button onClick={handleSearch}>Search</button>
        </div>
      </div>

      <Booklist booksData={filteredBooks} />

    </>
  );

}

export default App;
