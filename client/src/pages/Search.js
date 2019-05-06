import React, { Component } from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import SubmitBtn from '../components/SubmitBtn';
import { Row } from 'react-foundation';
import './style.css';

class Search extends Component {
    render() {
        return (
            <div>
                <Header title={"Google Books Search"}/>
                <div className="search-container">
                    <Row className="display">
                        <h1 className="sub-title">Search & Save Books</h1>
                    </Row>
                    <Row className="display search-form">
                        <form>
                            <SearchBar placeholder={"Search by keywords..."}/>
                            <SearchBar placeholder={"Search by author..."}/>
                            <SubmitBtn label={"Submit"}/>
                        </form>                
                    </Row>  
                </div>
            </div>
        )
    }
}

export default Search;