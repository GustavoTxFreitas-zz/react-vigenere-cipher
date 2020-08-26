import React from 'react';
import './style.css';

function Input({ label, value, setValue }) {
    
    return (
        <div>
            <label className='inputContainer'>
                <span className='inputLabel'>{label}:</span>
                <input className='input' type='text' 
                value={value}
                onChange={e => setValue(e.target.value.toUpperCase())}
                placeholder='Digite algo:' />
                
            </label>
        </div>
    );
}

export default Input;