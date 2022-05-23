import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItemToCart } from '../../redux/cart/cartSlice'
import { selectCartItemById } from '../../redux/cart/selectors'

import Button from '../Button'

import style from './FoodCard.module.css'

interface FoodCardProps {
    id: string
    restarautId: string | undefined
    restarautName: string | undefined
    image: string
    title: string
    description: string
    calories?: string
    gramm?: string
    price: number
}

const FoodCard: React.FC<FoodCardProps> = ({
    id,
    restarautId,
    restarautName,
    image,
    title,
    description,
    calories,
    gramm,
    price,
}) => {
    const dispatch = useDispatch()
    const cartItem = useSelector(selectCartItemById(id))

    const onAddItem = () => {
        const item = {
            id,
            restarautId,
            restarautName,
            description,
            title,
            image,
            price,
            count: 0,
        }
        dispatch(addItemToCart(item))
    }

    return (
        <div className={style.food__card}>
            <img src={image} alt={title} />
            <div>
                <h4>{title}</h4>
                <div className={style.food__card__info}>
                    <p className={style.food__card__gramm}>
                        {gramm ? gramm : 0} грамм
                    </p>
                    <p className={style.food__card__calories}>
                        {calories ? calories : 0} ккал
                    </p>
                </div>

                <p className={style.food__card__descr}>{description}</p>

                <div className={style.food__card__order}>
                    <p className={style.food__card__price}>{price} ₽</p>

                    <Button onClick={onAddItem}>
                        {cartItem ? `Добавить ${cartItem.count}` : 'В корзину'}
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default FoodCard
