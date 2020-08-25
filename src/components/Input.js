import React from 'react';

function Input({ label, value, setValue }) {
    return (
        <div>
            <label>
                <span>{label}:</span>

                <input type='text' 
                value={value}
                onChange={e => setValue(e.target.value.toUpperCase())}
                placeholder='Digite algo:' />
                
            </label>
        </div>
    );
}

export default Input;