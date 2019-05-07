import React, { Component } from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import SubmitBtn from '../components/SubmitBtn';
import { Grid } from 'react-foundation';
import './style.css';

class Search extends Component {
    state = {
        keywords: '',
        author: ''
    }

    searchBooks = () => {
        
    }

    handleInputChange = event => {
        let { name, value } = event.target;

        this.setState({
            [name]: value
        });
    }

    handleSubmit = event => {
        event.preventDefault();
        
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
                            placeholder="Search by keywords..."
                            name="keywords"
                            value={this.state.keywords}
                            onChange={this.handleInputChange} />
                            <SearchBar 
                            placeholder="Search by author..."
                            name="author"
                            value={this.state.author}
                            onChange={this.handleInputChange}/>
                            <SubmitBtn 
                            label="Submit" onClick={this.handleSubmit}/>
                        </form>                
                    </Grid>  
                </div>
            </div>
        )
    }
}

export default Search;