import React, { Component } from 'react'
import ShelfChanger from './ShelfChanger.js'
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'

class Book extends Component {

	static propTypes = {
		title: PropTypes.string.isRequired,
		authors: PropTypes.array.isRequired,
		backgroundImage: PropTypes.string
	};

	state = {
		bookShelf: ''
	}

	// set initial state
	componentDidMount() {
		BooksAPI.get(this.props.id).then((book) => {
			this.setState({bookShelf: book.shelf})
		})
 	}

	render() {
		const {id, title, shelf, authors, coverUrl} = this.props; // decomposition
		const authorsJoined = authors.join(", "); // joined array of authors separated with comma 
		const imgSize = {width: 128, height: 193}

		// inspired by https://stackoverflow.com/questions/11442712/get-width-height-of-remote-image-from-url
/*		const getSize = (url) => {   
		    const img = new Image();
		    img.src = url;
		    img.onload = () => {
		    	imgSize['width'] = this.width;
		    	imgSize['height'] = this.height;
		    	console.log(imgSize);
		    };

		}*/

		return (
			<div className="book">
				<div className="book-top">
					<div className="book-cover" style={{width: imgSize.width, height: imgSize.height, backgroundImage: `url(${coverUrl})`}}/>
					<ShelfChanger bookId={id} shelf={this.state.bookShelf}/>
				</div>
				<div className="book-title"> {title} </div>
				<div className="book-authors"> {authorsJoined} </div>
			</div>
		)
	}
}

export default Book