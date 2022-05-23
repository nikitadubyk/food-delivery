import React from 'react'
import { CSSTransition } from 'react-transition-group'

import './Modal.css'

interface ModalProps {
    title: string
    message: string
    footer?: any
    isOpen: boolean
}

const Modal: React.FC<ModalProps> = ({ title, message, footer, isOpen }) => {
    return (
        <div className='overlay' style={{ display: isOpen ? '' : 'none' }}>
            <CSSTransition
                in={isOpen}
                mountOnEnter
                unmountOnExit
                timeout={300}
                classNames='modal'
            >
                <div className='modal'>
                    <h3>{title}</h3>
                    <div>{message}</div>
                    <div>{footer}</div>
                </div>
            </CSSTransition>
        </div>
    )
}

export default Modal
