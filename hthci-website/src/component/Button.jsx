import React from 'react'; //imr - shortcut
import './Button.css';
import { Link } from 'react-router-dom';
//import { type } from '@testing-library/user-event/dist/type';

const STYLES = ['btn--primary', 'btn--outline']
const SIZES = ['btn--medium', 'btn--large']

export const Button = ({
    children,
    type, 
    onClick,
    buttonStyle,
    buttonSize
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0] //aqui é determinando q caso nao tenha um style , assuma o estilo do indice 0

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

    return (
        <Link to='/get-involved' className='btn-mobile'>
            <button className={`btn ${checkButtonStyle} ${checkButtonSize}`}
                onClick={onClick}
                type={type}    
            >
                {children}
            </button>
        </Link>
    )
};
