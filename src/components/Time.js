import React from 'react';

// const styles = {};

const Time = ({ label, time, color }) => (
    <div className='Time'>
        <p
            className='Time-label'
            style={{ color: `${ color }` }}
        >
            { label }
        </p>
        <div
            className='Time-time'
            style={{ borderColor: `${ color }`}}
        >
            { time }
        </div>
    </div>
);

export default Time;
