import React from 'react';
import './style.css';

export default function Button(props) {
    return <button className="button button-rounded-hover">{props.label}</button>;
}