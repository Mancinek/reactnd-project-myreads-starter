import React, { Component } from 'react'
import './App.css'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book.js'
import sortBy from 'sort-by'

class SearchBooks extends Component {

    state = {
        books: []
    }

    searchBooks = (query) => {
        
        if (query) { // if query is typed into search (query == true) then state is set depending on books returned by api response
            BooksAPI.search(query.trim()).then((booksSearchResult) => {
                /*  if error is returned from search (there is no search results and it get object {error: "empty query", items: Array(0)})
                    then set state to empty array and display nothing
                */
                if (booksSearchResult.error) {
                    console.log('Nothing found')
                    this.setState({books : []})
                } else {
                    /*  for results of search (for booksSearchResult) we need to assign shelf (if it is currently on shelf). If the book is not placed on shelf, the shelf is undefined and this case is resolved by Book component
                        The procedure of setting shelf starts with filtering out those books from search results, which are placed currently on shelf (bookOnShelf.id === book.id) and for those books the shelf is set (book.shelf = bookOnShelf.shelf)
                    */
                    booksSearchResult.map(book => (this.props.books.filter((bookOnShelf) => bookOnShelf.id === book.id).map(bookOnShelf => book.shelf = bookOnShelf.shelf)))
                    // after setting shelfs for search results, the state of search page is updated
                    this.setState({books: booksSearchResult.sort(sortBy('title'))})
                }
            })
        } else { // else the state is set to empty array
            this.setState({books : []})
        }
    }

    render() {
        
	   return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className='close-search' to='/'>Close</Link>
                    <div className="search-books-input-wrapper">
                        {/* 
                          NOTES: The search from BooksAPI is limited to a particular set of search terms.
                          You can find these search terms here:
                          https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
                          
                          However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                          you don't find a specific author or title. Every search is limited by search terms.
                        */}
                        <input type="text" placeholder="Search by title or author" onChange={(event) => this.searchBooks(event.target.value)}/> {/*onchange the searchBooks is called with query typed in search box*/}
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {this.state.books.map(book => {
                            const checkedAuthor = book.authors ? book.authors : ['Unknown author'] // if authors are undefined the default author is set
                            const checkedImage = book.imageLinks ? book.imageLinks.smallThumbnail : 'Unknown cover' // if imageLinks is undefined then default image is set
                            /*const shelf = (book.shelf!=undefined) ? book.shelf : 'none'*/
                            
                            return (
                                <li key={book.id}>
                                    <Book onChangeShelf={this.props.onUpdateBooks} book={book} id={book.id} shelf={book.shelf} title={book.title} authors={checkedAuthor} coverUrl={checkedImage}/>
                                </li>
                            )
                        })}                  
                    </ol>
                </div>
            </div>
		)
	}
}

export default SearchBooks