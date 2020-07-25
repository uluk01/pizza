import React from "react";
import classNames from 'classnames';
import {Link} from "react-router-dom";


const Button = ({onClick, className, outline, children}) => {
    return (
        <Link to="/cart"
            onClick={onClick}
            className={classNames('button', className, {
                'button-outline': outline,
            })}>
            {children}
        </Link>

    )
};
export default Button;