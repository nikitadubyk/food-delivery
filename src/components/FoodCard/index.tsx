import React from 'react'
import Button from '../Button'

import style from './FoodCard.module.css'

interface FoodCardProps {
    id: string
    restarautId: string | undefined
    image: string
    title: string
    description: string
    calories?: string
    gramm?: string
    price: string
}

const FoodCard: React.FC<FoodCardProps> = ({
    id,
    restarautId,
    image,
    title,
    description,
    calories,
    gramm,
    price,
}) => {
    const showProd = () => {
        console.log({
            id,
            restarautId,
            title,
            image,
            price,
        })
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

                    <Button onClick={showProd}>В корзину</Button>
                </div>
            </div>
        </div>
    )
}

export default FoodCard
