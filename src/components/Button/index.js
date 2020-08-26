import React from 'react';
import './style.css'

function Button({event, text}) {
    return (
        <div>
            <button id='button' onClick={event}>
                <p id='buttonText'>{text}</p>
            </button>
        </div>
    );
}

export default Button;