import React from 'react';

const Button = ({ value, type = "button", onClick, classcss, ...btn }) => {
    return (
        <div>
            <button type={type} onClick={onClick} className={classcss} {...btn}>
                {value}
            </button>
        </div>
    );
};

export default Button;