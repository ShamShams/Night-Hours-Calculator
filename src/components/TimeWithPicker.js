import React from 'react';
import { TimePicker } from 'material-ui';

const TimeWithPicker = ({ label, hintText, value, handleChange, color }) => (
    <div className='Time'>
        <p
            className='Time-label'
            style={{ color: `${ color }` }}>
            { label }
        </p>
        <TimePicker
            format="24hr"
            name={ label }
            hintText='00:00'
            value={ value }
            onChange={ handleChange }
            textFieldStyle={{
                border: `3px solid ${ color }`,
                borderRadius: '5px',
                padding: '5px',
                width: '80px',
                height: '32px',
                fontSize: '24px',
                fontWeight: 'bold',
                fontFamily: 'Roboto Mono',
            }}
        />
    </div>
);

export default TimeWithPicker;
