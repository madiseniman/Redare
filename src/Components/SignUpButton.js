import React from 'react'
import '../CSS/App.css';

const url = "http://eepurl.com/hezB_L";

function simpleForm() {
    window.open(url);
}

const Button = () => (
    <button className="sign-up-button" onClick={simpleForm}>
        <text className="sign-up-button-text">Subscribe</text>
    </button>
)

export default Button;
