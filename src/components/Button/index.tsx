import React from 'react'

import style from './Button.module.css'

interface ButtonProps {
    className?: string
    children: string
    onClick?: () => void
}

const Button: React.FC<ButtonProps> = ({ className, children, onClick }) => {
    return (
        <button className={`${style.button} ${className}`} onClick={onClick}>
            {children.toUpperCase()}
        </button>
    )
}

export default Button
