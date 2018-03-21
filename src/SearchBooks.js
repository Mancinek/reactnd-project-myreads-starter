import React, { Component } from 'react'
import './App.css'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book.js'

class SearchBooks extends Component {

    state = {
        books: []
    }

    searchBooks = (query) => {
        if (query) { // if query is typed into search (query == true) then state is set depending on books returned by api response
            BooksAPI.search(query).then((books) => {
                this.setState({books})
            })
        } else { // else the state is set to empty array
            this.setState({books : []});
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
                            
                            return (
                                <li key={book.id}>
                                    <Book id={book.id} shelf={book.shelf} title={book.title} authors={checkedAuthor} coverUrl={checkedImage}/>
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