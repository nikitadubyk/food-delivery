import React, { useEffect } from 'react'
import { CSSTransition } from 'react-transition-group'

import './Modal.css'

interface ModalProps {
    title: string
    message: string | React.ReactNode
    footer?: string | React.ReactNode
    isOpen: boolean
    onClose: () => void
}

const Modal: React.FC<ModalProps> = ({
    title,
    message,
    footer,
    isOpen,
    onClose,
}) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        }
        return () => {
            document.body.style.overflow = ''
        }
    }, [isOpen])

    return (
        <div
            className='overlay'
            style={{ display: isOpen ? '' : 'none' }}
            onClick={e =>
                (e.target as Element).className === 'overlay' && onClose()
            }
        >
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
