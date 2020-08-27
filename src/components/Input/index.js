import React from 'react';
import './style.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Input({ label, icon, value, setValue }) {
    const iconElement = <FontAwesomeIcon className='icon' icon={icon} />
    
    return (
        <div>
            <p className='label'>{label}:</p>
            <label className='inputContainer'>
                {iconElement}
                <input className='input' type='text'
                    value={value}
                    maxLength='50'
                    autoFocus
                    onChange={e => setValue(e.target.value.toUpperCase())}
                    placeholder='Digite algo:' />
            </label>
        </div>
    );
}

export default Input;