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
}

export interface PostOrderType {
    name: string
    phone: string
    delivery: 'Самовывоз' | 'Доставка'
    address?: string
    order: { title: string; count: number }[]
    totalPrice: number
    restarautId: string | undefined
}
