export interface OrderModalProps {
    isOpen: boolean
    totalPrice: number
    onClose: () => void
}

export interface ModalViewProps {
    onClose: () => void
    totalPrice: number
}

export interface FormValues {
    name: string
    phone: string
    delivery: 'Самовывоз' | 'Доставка'
    address?: string
    comment?: string
}
