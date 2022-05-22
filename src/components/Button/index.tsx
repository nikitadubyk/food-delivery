import React from 'react'

import style from './Button.module.css'

interface ButtonProps {
    className?: string
    children: string
    reverse?: boolean
    type?: 'button' | 'submit'
    onClick?: () => void
}

const Button: React.FC<ButtonProps> = ({
    className,
    children,
    onClick,
    reverse = false,
    type = 'button',
}) => {
    return (
        <button
            className={`${style.button} ${className} ${
                reverse && style.button__reverse
            }`}
            onClick={onClick}
            type={type}
        >
            {children.toUpperCase()}
        </button>
    )
}

export default Button
