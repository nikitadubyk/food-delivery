import React from 'react'

import './Modal.css'

interface ModalProps {
    title: string
    message: string
    footer: any
}

const Modal: React.FC<ModalProps> = ({ title, message, footer }) => {
    return (
        <div className='overlay'>
            <div className='modal'>
                <h3>{title}</h3>
                <div>{message}</div>
                <div>{footer}</div>
            </div>
        </div>
    )
}

export default Modal
