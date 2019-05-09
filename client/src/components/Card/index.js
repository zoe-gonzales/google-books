import React from 'react';
import { Thumbnail, Cell, Button, Sizes } from 'react-foundation';
import './style.css';

export default function Card({
    title,
    authors,
    image,
    description,
    link,
    btnType,
    handler,
    id
}) {
    return (
        <div>
            <Cell small={2} large={4} >
                <div className="book-cell">
                    <div className="book-details">
                    <Thumbnail src={image} alt={title}/>
                    <div className="book-text">
                        <p>Title: {title}</p>
                        <p>Author: {authors}</p>
                        <p>Synopsis: {description}</p>
                        <a href={link} target="_blank" rel="noopener noreferrer">{"View on Google Books"}</a> <br/>
                        <Button className="button-remove" size={Sizes.SMALL} onClick={handler} id={id}>{btnType}</Button>
                    </div>
                    </div>
                </div>
            </Cell>
        </div>
    )
}