import { useDispatch } from 'react-redux'
import { FaPlus, FaMinus } from 'react-icons/fa'
import { plusItem, minusItem, removeItem } from '../../redux/cart/cartSlice'

import style from './CartItem.module.css'

interface CartItemProps {
    id: string
    image: string
    title: string
    count: number
    price: number
    description: string
}

const CartItem: React.FC<CartItemProps> = ({
    id,
    image,
    title,
    count,
    price,
    description,
}) => {
    const dispatch = useDispatch()

    const onAddItem = (id: string) => dispatch(plusItem(id))
    const onMunisItem = (id: string) => dispatch(minusItem(id))
    const onDeleteItem = (id: string) => dispatch(removeItem(id))

    return (
        <div className={style.cart__item}>
            <div className={style.cart__wrapper}>
                <img src={image} alt={title} />
                <div>
                    <div className={style.cart__descr}>
                        <h4>{title}</h4>

                        <p>{description}</p>
                    </div>
                </div>
            </div>

            <div className={style.cart__item__wrapper}>
                <div className={style.cart__item__count}>
                    <button
                        className={style.cart__item__button}
                        onClick={() => onMunisItem(id)}
                    >
                        <FaMinus />
                    </button>
                    <div>{count}</div>
                    <button
                        className={style.cart__item__button}
                        onClick={() => onAddItem(id)}
                    >
                        <FaPlus />
                    </button>
                </div>

                <div className={style.cart__price}>{price * count} ₽</div>

                <div
                    className={style.cart__delete}
                    onClick={() => onDeleteItem(id)}
                >
                    &#10010;
                </div>
            </div>
        </div>
    )
}

export default CartItem
