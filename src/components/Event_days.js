import React from 'react'
import { useState } from 'react';

function Event_days({buttons,onButtonClick}) {
    const [selectedButton, setSelectedButton] = useState('Day 1');

    const handleButtonClick = (index) => {
        setSelectedButton(index);
        onButtonClick(index);
    };
    return (
        <div className='flex justify-center'>
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

export default Event_days
