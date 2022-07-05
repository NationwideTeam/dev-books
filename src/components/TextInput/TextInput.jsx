import React from 'react';
import './textInput.css';

export const TextInput = () => {
    return (
        <form className='inputForm'>
            <label className='inputLabel'>
                이메일
            </label>
            <input className='emailInput' type="email" />
        </form>
    )
}