import React, { Component } from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import SubmitBtn from '../components/SubmitBtn';
import Card from '../components/Card';
import { Grid } from 'react-foundation';
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
           .then(res => {
            console.log(res.data.items);
            this.setState({ bookList: res.data.items });
           })
           .catch(error => console.log(error));
    }

    searchBooksByKeywordAndAuthor = () => {
        API.searchbyKeywordsAndAuthor(
            this.state.keywords,
            this.state.author
        ).then(res => {
            console.log(res.data.items);
            this.setState({ bookList: res.data.items });
        })
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

    render() {
        return (
            <div>
                <Header title="Google Books Search"/>
                <div className="search-container">
                    <Grid className="display">
                        <h1 className="sub-title">Search & Save Books</h1>
                    </Grid>
                    <Grid className="display search-form">
                        <form>
                            <SearchBar 
                            name="keywords"
                            value={this.state.keywords}
                            onChange={this.handleInputChange}
                            placeholder={this.state.termSearched 
                                ? "Search by keywords..." 
                                : "Keyword Required"}
                            />
                            
                            <SearchBar 
                            placeholder="Filter by author..."
                            name="author"
                            value={this.state.author}
                            onChange={this.handleInputChange}/>
                            <SubmitBtn 
                            label="Submit" onClick={this.handleSubmit}/>
                        </form>                
                    </Grid>
                    <Grid>
                        {this.state.bookList.map(book => {
                            return <Card
                            key={book.id}
                            title={book.volumeInfo.title}
                            authors={book.volumeInfo.authors ? book.volumeInfo.authors : 'Author unavailable.'}
                            image={book.volumeInfo.imageLinks.thumbnail ? book.volumeInfo.imageLinks.thumbnail : '//unsplash.it/200'} 
                            description={book.searchInfo ? book.searchInfo.textSnippet : 'No description available.'}
                            link={book.volumeInfo.previewLink}
                            btnType="Save"
                                />
                        })}
                    </Grid>  
                </div>
            </div>
        )
    }
}

export default Search;