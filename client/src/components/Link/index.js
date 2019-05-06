import React from 'react';
import { Button, Colors } from 'react-foundation';
import './style.css';

export default function LinkBtn(props) {
    return <Button 
        className="button-custom" 
        color={Colors.PRIMARY} 
        isHollow>{props.label}</Button>;
}