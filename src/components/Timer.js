import React, { useState, useEffect } from 'react';

const Timer = () => {

    const [isPaused, setIsPaused] = useState(true);
    const [countdown, setCountdown] = useState('');
    const [input, setInput] = useState('');

    const handlePause = () => {
        setIsPaused(!isPaused)

    };

    console.log(isPaused);

    useEffect(() => {
        if (isPaused) return;
        if (!countdown) return;

        const interval = setInterval(() => {
            setCountdown(countdown - 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [countdown, isPaused]);

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    const handleStart = () => {
        setCountdown(input);
        setIsPaused(false);
    }
    console.log(countdown);

    const handleReset = () => {
        setInput('');
        setIsPaused(true);
        setCountdown('');
    }

  return (
    <div className="timer">
        <input 
        className='input' 
        type='number' 
        name='text' 
        value={input}
        placeholder="SET SECONDS"
        onChange={handleChange}
        />
        <div className='buttons-container'>
            <button className='pause-button' onClick={handlePause}>PAUSE</button>
            <button className='reset-button' onClick={handleReset}>RESET</button>
            <button className='start-button' onClick={handleStart}>START</button>
        </div>
        <div
        className='output'>
        <p>{`${countdown}`}</p>
        </div>
    </div>
  )
};

export default Timer