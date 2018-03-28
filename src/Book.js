import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Book extends Component {

	static propTypes = {
		id: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
		authors: PropTypes.array.isRequired,
		coverUrl: PropTypes.string.isRequired,
		onChangeShelf: PropTypes.func.isRequired
	}
	// below method is for updating shelf - it uses props method derived from Bookshelf component (which was passed to Bookshelf from App.js)
	changeShelf = (shelf) => {
		this.props.onChangeShelf(this.props.book, shelf)
	}

	render() {
		const {id, title, shelf, authors, coverUrl} = this.props; // destructuring
		const authorsJoined = authors.join(', '); // joined array of authors separated with comma (in case when there are more than one author)
		const imgSize = {width: 128, height: 193} // fixed size of book cover
		// below book is returned with it's props. It has the Shelf Control integrated. If shelf is undefined then the checkmark is set to 'none'
		return (
			<div className="book">
				<div className="book-top">
					<div className="book-cover" style={{width: imgSize.width, height: imgSize.height, backgroundImage: `url(${coverUrl})`}}/>
						<div className="book-shelf-changer">
							<select value={shelf ? shelf : 'none'} onChange={(event) => this.changeShelf(event.target.value)}>
								<option value="none-disabled" disabled>Move to...</option>
								<option value="currentlyReading">Currently Reading</option>
								<option value="wantToRead">Want to Read</option>
								<option value="read">Read</option>
								<option value="none">None</option>
							</select>
						</div>
				</div>
				<div className="book-title"> {title} </div>
				<div className="book-authors"> {authorsJoined} </div>
			</div>
		)
	}
}

export default Book