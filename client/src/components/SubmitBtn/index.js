import React from 'react';
import { Button, Colors } from 'react-foundation';
import './style.css';

export default function SubmitBtn(props) {
    return <Button 
        className="button-submit" 
        color={Colors.PRIMARY} 
        isHollow>{props.label}</Button>;
}