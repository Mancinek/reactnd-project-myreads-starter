import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Book extends Component {

	static propTypes = {
		title: PropTypes.string.isRequired,
		authors: PropTypes.array.isRequired,
		backgroundImage: PropTypes.string
	}

 	changeShelf = (shelf) => {
 		console.log(`Taking book ${this.props.id} and placing it on ${shelf} shelf.`)
 		this.props.onChangeShelf(this.props.book, shelf)
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