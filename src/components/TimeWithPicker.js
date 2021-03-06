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
            className="TimePicker"
            format="24hr"
            name={ label }
            hintText='00:00'
            value={ value }
            onChange={ handleChange }
            underlineShow={ false }
            textFieldStyle={{
                border: `3px solid ${ color }`,
                borderRadius: '5px',
                padding: '5px 5px 5px 7px',
                width: '78px',
                height: '32px',
                fontSize: '24px',
                fontWeight: 'bold',
                fontFamily: 'Roboto Mono',
                cursor: 'pointer',
            }}
            inputStyle={{
                color: '#eee',
            }}
            hintStyle={{
                color: 'rgb(221, 221, 221, 0.2)',
            }}
        />
    </div>
);

export default TimeWithPicker;
