import React from 'react'
import { useDispatch } from 'react-redux'
import { addItemToCart } from '../../redux/cart/cartSlice'

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

    const onAddItem = () => {
        dispatch(
            addItemToCart({
                id,
                restarautId,
                restarautName,
                description,
                title,
                image,
                price,
                count: 0,
            })
        )
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

                    <Button onClick={onAddItem}>В корзину</Button>
                </div>
            </div>
        </div>
    )
}

export default FoodCard