import React from 'react'

import style from './Button.module.css'

interface ButtonProps {
    className?: string
    children: string
    type?: 'button' | 'submit'
    onClick?: () => void
}

const Button: React.FC<ButtonProps> = ({
    className,
    children,
    onClick,
    type = 'button',
}) => {
    return (
        <button
            className={`${style.button} ${className}`}
            onClick={onClick}
            type={type}
        >
            {children.toUpperCase()}
        </button>
    )
}

export default Button
