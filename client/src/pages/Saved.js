import React, { Component } from 'react';
import Header from '../components/Header';
import { Grid } from 'react-foundation';
import Card from '../components/Card';
import './style.css';

class Saved extends Component {

    render() {
        return (
            <div>
                <Header title={"Favorite Books"}/>
                <Grid className="display">
                    
                </Grid>
            </div>
        )
    }
}

export default Saved;