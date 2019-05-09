import React, { Component } from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import SubmitBtn from '../components/SubmitBtn';
import Card from '../components/Card';
import { Grid, Cell } from 'react-foundation';
import { Link } from 'react-router-dom';
import Button from '../components/Link';
import API from '../utils/API';
import './style.css';

class Search extends Component {
    state = {
        keywords: '',
        author: '',
        bookList: [],
        termSearched: true
    }

    searchBooksByKeyword = () => {
        API.searchbyKeywords(this.state.keywords)
           .then(res => this.setState({ bookList: res.data.items }))
           .catch(error => console.log(error));
    }

    searchBooksByKeywordAndAuthor = () => {
        API.searchbyKeywordsAndAuthor(
            this.state.keywords,
            this.state.author
        ).then(res => this.setState({ bookList: res.data.items }))
         .catch(error => console.log(error));
    }

    handleInputChange = event => {
        let { name, value } = event.target;

        this.setState({
            [name]: value
        });
    }

    handleSubmit = event => {
        event.preventDefault();

        if (!this.state.keywords) {
            this.setState({ termSearched: false })
        } else if (!this.state.author) {
            this.searchBooksByKeyword();
        } else {
            this.searchBooksByKeywordAndAuthor();
        }
        
    }

    saveBookToDB = data => {
        API.addBook(data)
           .then(res => console.log(res))
           .catch(error => console.log(error));
    }

    render() {
        return (
            <div>
                <Header title="Google Books Search"/>
                {/* Link to Favorites */}
                <Link to="/books">
                    <Button label={"Go to favorites"}/>
                </Link>  
                <div className="search-container">
                    <Grid className="display">
                        <h1 className="sub-title">Search & Save Books</h1>
                    </Grid>
                    {/* Form to search books */}
                    <Grid className="display search-form">
                        <form>
                            <SearchBar 
                            name="keywords"
                            value={this.state.keywords}
                            onChange={this.handleInputChange}
                            placeholder={this.state.termSearched 
                                ? "Search by keywords..." 
                                : "Keyword Required"}/>
                            <SearchBar 
                            placeholder="Filter by author..."
                            name="author"
                            value={this.state.author}
                            onChange={this.handleInputChange}/>
                            <SubmitBtn label="Submit" onClick={this.handleSubmit}/>
                        </form>               
                    </Grid>                      
                    {/* List of book results */}
                    <Grid>
                        {this.state.bookList.map(book => {
                            let title = book.volumeInfo.title;
                            let authors = book.volumeInfo.authors ? book.volumeInfo.authors : 'Author unavailable.';
                            let image = book.volumeInfo.imageLinks.thumbnail ? book.volumeInfo.imageLinks.thumbnail : '//unsplash.it/200';
                            let description = book.searchInfo ? book.searchInfo.textSnippet : 'No description available.';
                            let link = book.volumeInfo.previewLink;
                            return (
                                <Grid className="display2" key={book.id}>
                                    <Cell small={10} large={10} >
                                        <Card
                                        title={title} authors={authors}
                                        image={image} description={description}
                                        link={link} btnType="Save"
                                        handler={() => this.saveBookToDB({
                                            title: title,
                                            authors: authors.join(" ").toString(),
                                            image: image,
                                            description: description,
                                            link: link
                                        })}/>
                                    </Cell>
                                </Grid>
                            );
                        })}
                    </Grid>
                </div>
            </div>
        )
    }
}

export default Search;