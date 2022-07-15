export interface OrderModalProps {
    isOpen: boolean
    totalPrice: number
    onClose: () => void
}

export interface ModalViewProps {
    totalPrice: number
    onClose: () => void
}

export interface FormValues {
    name: string
    phone: string
    address?: string
    delivery: 'Самовывоз' | 'Доставка'
}

export interface PostOrderType {
    name: string
    phone: string
    address?: string
    totalPrice: number
    restarautId: string | undefined
    delivery: 'Самовывоз' | 'Доставка'
    order: { title: string; count: number }[]
}
