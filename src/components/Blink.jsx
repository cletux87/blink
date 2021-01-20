import React from 'react';
import './blink.css'

export const Blink = (props) => {
    return(
    <div className="react-blink">{props.children}</div>
    )
}