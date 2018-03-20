import React, { Component } from 'react'
import ShelfChanger from './ShelfChanger.js'
import PropTypes from 'prop-types'
import Book from './Book.js'

class Bookshelf extends Component {

	static propTypes = {
		title: PropTypes.string.isRequired,
		id: PropTypes.string.isRequired,
		booksOnShelf: PropTypes.array.isRequired
	};

	render() {
		
		const {id, title, booksOnShelf} = this.props; // decomposotion
		const booksOnShelfFiltered = booksOnShelf.filter(book => book.shelf == id); // filtered books for those which have the same shlef like id of the current shelf
		console.log(booksOnShelfFiltered);

/*		const getMeta = (url) => {   
		    const img = new Image();
		    img.onload = function(){
		        return {width: this.width, height: this.height}
		    };
		    img.src = url;
		}*/

		return (

			<div className="bookshelf">
				<h2 className="bookshelf-title"> {title} </h2>
				<div className="bookshelf-books">
					<ol className="books-grid">

						{booksOnShelfFiltered.map(book => (// if there are books on shelf (booksOnShelf is not undefined, because it has book from api request) tben render each book on shelf
							<li key={book.id}>
								<Book id={book.id} shelf={book.shelf} title={book.title} authors={book.authors} coverUrl={book.imageLinks.smallThumbnail}/>
							</li>
						))}
					</ol>
				</div>
			</div>
		)
	}

}

export default Bookshelf