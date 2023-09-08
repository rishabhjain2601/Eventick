import React from 'react'
import { useState } from 'react';

function Genre ({buttons,onButtonClick}){
    const [selectedButton, setSelectedButton] = useState('All');

    const handleButtonClick = (index) => {
        setSelectedButton(index);
        onButtonClick(index);
    };
    return (
        <div className='flex max-sm:flex-wrap max-sm:max-w-sm mx-auto justify-center'>
            {buttons.map((button, index) => (
                <button
                    key={index}
                    onClick={() => handleButtonClick(button)}
                    className={selectedButton === button ? 'selected' : 'notselected'}
                >
                    {button}
                </button>
            ))}
        </div>
    )
}

export default Genre
