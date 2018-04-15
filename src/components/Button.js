import React from 'react';

const Button = ({ classname, label, handleClick, disabled }) => (
    <button
        className={ classname }
        onClick={ handleClick }
        disabled={ disabled }
    >
        { label }
    </button>
);

export default Button;
