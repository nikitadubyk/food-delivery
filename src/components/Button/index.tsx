import style from './Button.module.css'

interface ButtonProps {
    children: string
    reverse?: boolean
    className?: string
    disabled?: boolean
    onClick?: () => void
    type?: 'button' | 'submit'
}

const Button: React.FC<ButtonProps> = ({
    onClick,
    children,
    className,
    reverse = false,
    type = 'button',
    disabled = false,
}) => {
    return (
        <button
            className={`${style.button} ${className} ${
                reverse && style.button__reverse
            }`}
            onClick={onClick}
            type={type}
            disabled={disabled}
        >
            {children.toUpperCase()}
        </button>
    )
}

export default Button
